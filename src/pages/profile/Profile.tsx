import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { UserApi } from '@utils/apis/user/UserApi'
import { useRecoilValue } from 'recoil'
import { authState } from '@libs/store/auth'
import { useQuery } from '@tanstack/react-query'
import { Spacing } from '@components/atoms/Spacing'
import { Padding } from '@components/layouts/Padding'
import { Filter } from '@components/atoms/Filter'
import { SelectedProps, SelectedTag, UserInfo } from '@utils/apis/user/UserType'
import { ProfileImage } from '@components/profile/ProfileImage'
import { UserTagData } from '@components/profile/UserTagData'
import { ProfileHeader } from '@components/profile/ProfileHeader'
import useProfileMutate from '@libs/hooks/useProfileMutate'

const selectedProps: SelectedProps = [
  { id: 1, active: false, name: '메이크업', value: 'MAKEUP' },
  { id: 2, active: false, name: '프레그런스', value: 'FRAGRANCE' },
  { id: 3, active: false, name: '의류', value: 'CLOTHES' },
  { id: 4, active: false, name: '패션소품', value: 'FASHION_PRODUCT' },
  { id: 5, active: false, name: '액세사리', value: 'ACCESSORY' },
  { id: 6, active: false, name: '요리', value: 'COOKING' },
  { id: 7, active: false, name: '운동', value: 'EXERCISE' },
  { id: 8, active: false, name: '여행', value: 'TRAVEL' },
  { id: 9, active: false, name: '문화생활', value: 'CULTURE_LIFE' },
]

export type ProfilePropsType<T extends UserInfo> = {
  friendData?: T
  friendId?: T extends UserInfo ? number : undefined
}

const Profile = ({ friendData, friendId }: ProfilePropsType<UserInfo>) => {
  const auth = useRecoilValue(authState)

  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([])

  const { updateFriendProfileViewTimeMutate } = useProfileMutate()

  useEffect(() => {
    if (friendId) {
      updateFriendProfileViewTimeMutate(friendId)
    }
  }, [friendId])

  const { data: userData = {} as UserInfo } = useQuery(
    ['userProfile', auth.userProfile.userId],
    () => UserApi.GET_USER_INFO(auth.userProfile.userId),
    {
      enabled: !friendData,
    },
  )

  const { data: userTagData = [] } = useQuery(
    ['userTag', !friendData ? auth.userProfile.userId : friendId],
    () =>
      UserApi.GET_USER_TAG(
        !friendData ? auth.userProfile.userId : (friendId as number),
      ),
  )

  const getFilteredData = (selectedTags: SelectedTag[]) => {
    const promises = selectedTags.map((tag) =>
      UserApi.GET_FILTERED_USER_TAG(
        !friendData ? auth.userProfile.userId : (friendId as number),
        tag.value,
      ),
    )

    return Promise.all(promises)
  }

  const { data: filteredUserTagData = [] } = useQuery(
    [
      'filteredUserTag',
      selectedTags,
      !friendData ? auth.userProfile.userId : friendId,
    ],
    () => getFilteredData(selectedTags),
    {
      enabled: selectedTags.length > 0,
    },
  )

  return (
    <>
      <ProfileImage />
      <Spacing />
      <Padding size={[0, 16]}>
        <ProfileWrapper>
          <ProfileHeader
            userData={friendData ? friendData : userData}
            isFriend={friendId !== undefined}
          />
          <Spacing height={32} />
          <FilterWrapper>
            <Filter
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              selectedProps={selectedProps}
            />
          </FilterWrapper>
          <Spacing height={20} />
          <UserTagData
            selectedTags={selectedTags}
            filteredUserTagData={filteredUserTagData}
            userTagData={userTagData}
          />
        </ProfileWrapper>
      </Padding>
    </>
  )
}

export default Profile

const ProfileWrapper = styled.div``

const FilterWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`

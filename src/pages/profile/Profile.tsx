import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
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
import { profileState } from '@libs/store/profile'
import { ProfileButtonVariant } from '@components/profile/ProfileMenuButtons'
import Dimmer from '@components/layouts/Dimmer'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import ProfileMenuButtons from '@components/profile/ProfileMenuButtons'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import { friendState } from '@libs/store/friend'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'

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
  addFriend?: boolean
}

const Profile = ({
  friendData,
  friendId,
  addFriend = false,
}: ProfilePropsType<UserInfo>) => {
  const auth = useRecoilValue(authState)
  const profileStateData = useRecoilValue(profileState)
  const friendStateData = useRecoilValue(friendState)

  const profileMenuOutsideRef = useRef(null)
  const friendMenuOutsideRef = useRef(null)
  const cutOffMenuOutsideRef = useRef(null)
  const blockMenuOutsideRef = useRef(null)
  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([])

  const isProfileMenuOpen = profileStateData?.isMenuOpen ?? false
  const isFriendMenuOpen = friendStateData?.isMenuOpen ?? false
  const isCutOffMenuOpen = friendStateData?.isCutOffMenuOpen ?? false
  const isBlockMenuOpen = friendStateData?.isBlockMenuOpen ?? false

  const { setIsEdit, setIsMenuOpen } = useSetProfileRecoilState()
  const { setIsMenuOpen: setIsFriendMenuOpen, setIsCutOffMenuOpen } =
    useSetFriendRecoilState()
  const { updateFriendProfileViewTimeMutate } = useProfileMutate()

  useEffect(() => {
    if (friendId) {
      updateFriendProfileViewTimeMutate(friendId)
    }
  }, [friendId])

  useEffect(() => {
    // 메뉴 버튼 오픈 시 스크롤 금지
    if (
      isProfileMenuOpen ||
      isFriendMenuOpen ||
      isCutOffMenuOpen ||
      isBlockMenuOpen
    ) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isProfileMenuOpen, isFriendMenuOpen])

  useEffect(() => {
    setIsEdit(false)
  }, [])

  const { data: userData = {} as UserInfo } = useQuery(
    ['userProfile', auth.userProfile.id],
    () => UserApi.GET_USER_INFO(auth.userProfile.id),
    {
      enabled: !friendData,
    },
  )

  const { data: userTagData = [] } = useQuery(
    ['userTag', !friendData ? auth.userProfile.id : friendId],
    () =>
      UserApi.GET_USER_TAG(
        !friendData ? auth.userProfile.id : (friendId as number),
      ),
  )

  const getFilteredData = (selectedTags: SelectedTag[]) => {
    const promises = selectedTags.map((tag) =>
      UserApi.GET_FILTERED_USER_TAG(tag.value),
    )

    return Promise.all(promises)
  }

  const { data: filteredUserTagData = [] } = useQuery(
    [
      'filteredUserTag',
      selectedTags,
      !friendData ? auth.userProfile.id : friendId,
    ],
    () => getFilteredData(selectedTags),
    {
      enabled: selectedTags.length > 0,
    },
  )

  const handleClickProfileDimmer = useOutsideClick(profileMenuOutsideRef, () =>
    setIsMenuOpen(false),
  )

  const handleClickFriendDimmer = useOutsideClick(friendMenuOutsideRef, () =>
    setIsFriendMenuOpen(false),
  )

  const handleClickCutOffDimmer = useOutsideClick(cutOffMenuOutsideRef, () =>
    setIsCutOffMenuOpen(false),
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
            addFriend={addFriend}
          />
          {!addFriend && (
            <>
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
                isFriend={friendId !== undefined}
              />
            </>
          )}
        </ProfileWrapper>
      </Padding>
      {isProfileMenuOpen && (
        <>
          <Dimmer
            dimmerRef={profileMenuOutsideRef}
            onClick={handleClickProfileDimmer}
          />
          <ProfileMenuButtons type={'myProfile' as ProfileButtonVariant} />
        </>
      )}
      {isFriendMenuOpen && (
        <>
          <Dimmer
            dimmerRef={friendMenuOutsideRef}
            onClick={handleClickFriendDimmer}
          />
          <ProfileMenuButtons type={'report' as ProfileButtonVariant} />
        </>
      )}
      {isCutOffMenuOpen && (
        <>
          <Dimmer
            dimmerRef={cutOffMenuOutsideRef}
            onClick={handleClickCutOffDimmer}
          />
          <ProfileMenuButtons
            type={'cutOffFriend' as ProfileButtonVariant}
            friendUserId={friendData?.userId}
            friendImageUrl={friendData?.thumbnail}
          />
        </>
      )}
      {isBlockMenuOpen && (
        <>
          <Dimmer
            dimmerRef={blockMenuOutsideRef}
            onClick={handleClickFriendDimmer}
          />
          <ProfileMenuButtons
            type={'block' as ProfileButtonVariant}
            friendUserId={friendData?.userId}
            friendImageUrl={friendData?.thumbnail}
          />
        </>
      )}
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

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import styled from '@emotion/styled'

import useProfileMutate from '@libs/hooks/useProfileMutate'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import { useProfileMenus } from '@libs/hooks/useProfileMenus'
import { authState } from '@libs/store/auth'
import { SelectedTag, UserInfo } from '@models/apis/UserType'
import {
  ProfilePropsType,
  SelectedPropType,
  MenuButtonType,
} from '@models/components/Profile/profile'
import { SubCategoryValueType } from '@models/favor'
import { UserApi } from '@utils/apis/user/UserApi'
import { selectedProps } from '@constants/Profile/selectedProps'
import { Padding } from '@components/layouts/Padding'
import Dimmer from '@components/layouts/Dimmer'
import ProfileMenuButtons from '@components/profile/ProfileInfo/ProfileMenuButtons'
import { Spacing } from '@components/atoms/Spacing'
import { Filter } from '@components/atoms/Filter'
import { ProfileImage } from '@components/profile/ProfileInfo/ProfileImage'
import { ProfileHeader } from '@components/profile/ProfileInfo/ProfileHeader'
import { UserTagDataListItem } from '@components/profile/ProfileInfo/UserTagDataListItem'

const Profile = ({
  userData,
  userId,
  addFriend = false,
}: ProfilePropsType<UserInfo>) => {
  const auth = useRecoilValue(authState)

  const params = useParams()
  const {
    menus,
    isProfileMenuOpen,
    isFriendMenuOpen,
    isCutOffMenuOpen,
    isBlockMenuOpen,
  } = useProfileMenus()

  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([])
  const [userTagCountSumData, setUserTagCountSumData] = useState<number>(0)

  const { setIsEdit } = useSetProfileRecoilState()
  const { updateFriendProfileViewTimeMutate } = useProfileMutate()

  const { data: myData = {} as UserInfo } = useQuery(
    ['userProfile', auth.userProfile.id],
    () => UserApi.GET_USER_INFO(auth.userProfile.id),
    {
      enabled: !userData,
    },
  )

  const getSmallCategoryData = (
    selectedTags: SelectedTag[],
  ): SubCategoryValueType[] => {
    return selectedTags.length
      ? selectedTags.map((tag: SelectedTag) => tag.value)
      : selectedProps.map(
          (selectedProp: SelectedPropType) => selectedProp.value,
        )
  }

  const { data: userTagData = [] } = useQuery(
    ['filteredUserTag', selectedTags, !userData ? auth.userProfile.id : userId],
    () =>
      UserApi.GET_USER_TAG(
        !userData ? auth.userProfile.id : userId!,
        getSmallCategoryData(selectedTags),
      ),
    {
      enabled: userId !== undefined || !params?.id,
    },
  )

  const favorListData = userId ? userData?.userFavorList : myData.userFavorList

  useEffect(() => {
    userId && updateFriendProfileViewTimeMutate(userId)
  }, [userId])

  useEffect(() => {
    setIsEdit(false)
  }, [])

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
  }, [isProfileMenuOpen, isFriendMenuOpen, isCutOffMenuOpen, isBlockMenuOpen])

  useEffect(() => {
    if (!selectedTags.length) {
      selectedProps.map((prop) => {
        userTagData.forEach((tag) =>
          tag.smallCategory === prop.value
            ? (prop.count = tag.answerContentList?.length)
            : 0,
        )
      })

      let userTagCount = 0
      userTagData.forEach((userTagCategory) => {
        userTagCount += userTagCategory.answerContentList.length
      })
      setUserTagCountSumData(userTagCount)
    }
  }, [userTagData])

  const getFriendUserId = (menu: MenuButtonType) => {
    if (
      menu.type === 'cutOffFriend' ||
      menu.type === 'block' ||
      menu.type === 'cancelBlock'
    ) {
      return userData?.userId
    }
  }

  const getFriendImageUrl = (menu: MenuButtonType) => {
    if (
      menu.type === 'cutOffFriend' ||
      menu.type === 'block' ||
      menu.type === 'cancelBlock'
    ) {
      return userData?.thumbnail
    }
  }

  const renderMenuButtons = () => {
    return menus.map(
      (menu, idx) =>
        menu.menuOpen && (
          <ProfileMenuButtonWrapper key={idx}>
            <Dimmer dimmerRef={menu.ref} onClick={menu.close} />
            <ProfileMenuButtons
              type={menu.type}
              friendId={userId}
              friendUserId={getFriendUserId(menu)}
              friendImageUrl={getFriendImageUrl(menu)}
            />
          </ProfileMenuButtonWrapper>
        ),
    )
  }

  const renderFilterAndTagItem = () => {
    if (userData || myData) {
      return (
        <>
          <Spacing height={32} />
          <FilterWrapper>
            {userTagCountSumData && (
              <Filter
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                selectedProps={selectedProps}
              />
            )}
          </FilterWrapper>
          <Spacing height={20} />
          <UserTagDataListItem
            selectedProps={selectedProps}
            userTagData={userTagData}
            isFriend={userData ? true : false}
          />
        </>
      )
    } else {
      return <Spacing height={24} />
    }
  }

  return (
    <>
      <ProfileImage favorList={favorListData!} />
      <Spacing />
      <Padding size={[0, 16]}>
        <ProfileWrapper>
          <ProfileHeader
            userData={userData ? userData : myData}
            addFriend={addFriend}
          />
          {renderFilterAndTagItem()}
        </ProfileWrapper>
      </Padding>
      <Spacing height={64} />
      {renderMenuButtons()}
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

const ProfileMenuButtonWrapper = styled.div``

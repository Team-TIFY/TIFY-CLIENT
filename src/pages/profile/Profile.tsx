import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import styled from '@emotion/styled'

import useProfileMutate from '@libs/hooks/useProfileMutate'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import { useProfileMenus } from '@libs/hooks/useProfileMenus'
import { authState } from '@libs/store/auth'
import {
  ProfilePropsType,
  SelectedPropType,
} from '@models/components/Profile/profile'
import { SelectedTagType, SubCategoryValueType } from '@models/common/favor'
import { UserInfoType } from '@models/apis/UserType'
import { profileQueryKeys } from '@constants/queryKeys/profileQueryKeys'
import { UserApi } from '@apis/user/UserApi'
import { selectedProps } from '@constants/profile/selectedProps'
import { Padding } from '@components/layouts/Padding'
import { Spacing } from '@components/atoms/Spacing'
import { ProfileHeader } from '@components/profile/ProfileInfo/ProfileHeader'
import ProfileMenuButtonListItem from '@components/profile/ProfileInfo/ProfileMenuButtonListItem'
import UserTastes from '@components/profile/ProfileInfo/UserTastes'
import ProfileImage from '@components/profile/ProfileInfo/ProfileImage'

const Profile = ({
  userData,
  userId,
  addFriend = false,
}: ProfilePropsType<UserInfoType>) => {
  const auth = useRecoilValue(authState)

  const params = useParams()
  const {
    menus,
    isProfileMenuOpen,
    isFriendMenuOpen,
    isCutOffMenuOpen,
    isBlockMenuOpen,
  } = useProfileMenus()

  const [selectedTags, setSelectedTags] = useState<SelectedTagType[]>([])
  const [userTagCountSumData, setUserTagCountSumData] = useState<number>(0)

  const { setIsEdit } = useSetProfileRecoilState()
  const { updateFriendProfileViewTimeMutate } = useProfileMutate()

  const { data: myData = {} as UserInfoType } = useQuery(
    [profileQueryKeys.USER_INFO, auth.userProfile.id],
    () => UserApi.GET_USER_INFO(auth.userProfile.id),
    {
      enabled: !userData,
    },
  )

  const getSmallCategoryData = (
    selectedTags: SelectedTagType[],
  ): SubCategoryValueType[] => {
    return selectedTags.length
      ? selectedTags.map((tag: SelectedTagType) => tag.value)
      : selectedProps.map(
          (selectedProp: SelectedPropType) => selectedProp.value,
        )
  }

  const { data: userTagData = [] } = useQuery(
    [
      profileQueryKeys.USER_TAG,
      selectedTags,
      !userData ? auth.userProfile.id : userId,
    ],
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

  const renderMenuButtons = () => {
    return menus.map(
      (menu, idx) =>
        menu.menuOpen && (
          <ProfileMenuButtonListItem
            key={idx}
            userData={userData!}
            userId={userId!}
            idx={idx}
            menu={menu}
          />
        ),
    )
  }

  const renderFilterAndTagItem = () => {
    if (userData || myData) {
      return (
        <UserTastes
          userTagCountSumData={userTagCountSumData}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          userTagData={userTagData}
          userData={userData!}
        />
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

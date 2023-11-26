import { MouseEventHandler, RefObject, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import { Padding } from '@components/layouts/Padding'
import Dimmer from '@components/layouts/Dimmer'
import { Spacing } from '@components/atoms/Spacing'
import { CategoryAnswerCountType, Filter } from '@components/atoms/Filter'
import { ProfileButtonVariant } from '@components/profile/ProfileMenuButtons'
import { ProfileImage } from '@components/profile/ProfileImage'
import { ProfileHeader } from '@components/profile/ProfileHeader'
import ProfileMenuButtons from '@components/profile/ProfileMenuButtons'
import { UserTagDataListItem } from '@components/profile/UserTagDataListItem'
import {
  SelectedProps,
  SelectedTag,
  SubCategoryName,
  SubCategoryType,
  UserInfo,
} from '@utils/apis/user/UserType'
import { UserApi } from '@utils/apis/user/UserApi'
import useProfileMutate from '@libs/hooks/useProfileMutate'
import { useOutsideClick } from '@libs/hooks/useOutsideClick'
import useSetProfileRecoilState from '@libs/hooks/useSetProfileRecoilState'
import { useSetFriendRecoilState } from '@libs/hooks/useSetFriendRecoilState'
import { friendState } from '@libs/store/friend'
import { authState } from '@libs/store/auth'
import { profileState } from '@libs/store/profile'

const selectedProps: SelectedProps = [
  { id: 1, active: false, name: '메이크업', value: 'MAKEUP', count: 0 },
  { id: 2, active: false, name: '프레그런스', value: 'FRAGRANCE', count: 0 },
  { id: 3, active: false, name: '의류', value: 'CLOTHES', count: 0 },
  {
    id: 4,
    active: false,
    name: '패션소품',
    value: 'FASHION_PRODUCT',
    count: 0,
  },
  { id: 5, active: false, name: '액세사리', value: 'ACCESSORY', count: 0 },
  { id: 6, active: false, name: '요리', value: 'COOKING', count: 0 },
  { id: 7, active: false, name: '운동', value: 'EXERCISE', count: 0 },
  { id: 8, active: false, name: '여행', value: 'TRAVEL', count: 0 },
  { id: 9, active: false, name: '문화생활', value: 'CULTURE_LIFE', count: 0 },
]

export type SelectedPropType = {
  id: number
  active: boolean
  name: SubCategoryName
  value: SubCategoryType
}

export type ProfilePropsType<T extends UserInfo> = {
  friendData?: T
  friendId?: T extends UserInfo ? number : undefined
  addFriend?: boolean
}

type MenuButtonType = {
  menuOpen: boolean
  ref: RefObject<HTMLDivElement>
  type: string
  close: MouseEventHandler<HTMLDivElement>
}

const Profile = ({
  friendData,
  friendId,
  addFriend = false,
}: ProfilePropsType<UserInfo>) => {
  const auth = useRecoilValue(authState)
  const profileStateData = useRecoilValue(profileState)
  const friendStateData = useRecoilValue(friendState)

  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([])
  const [userTagCountData, setUserTagCountData] = useState<
    CategoryAnswerCountType[]
  >([])
  const [userTagCountSumData, setUserTagCountSumData] = useState<number>(0)

  const [profileMenuOutsideRef, handleClickProfileDimmer] = useOutsideClick(
    () => setIsMenuOpen(false),
  )

  const [friendMenuOutsideRef, handleClickFriendDimmer] = useOutsideClick(() =>
    setIsFriendMenuOpen(false),
  )

  const [cutOffMenuOutsideRef, handleClickCutOffDimmer] = useOutsideClick(() =>
    setIsCutOffMenuOpen(false),
  )

  const [blockMenuOutsideRef, handleClickBlockDimmer] = useOutsideClick(() =>
    setIsBlockMenuOpen(false),
  )

  const [cancelBlockMenuOutsideRef, handleClickCancelBlockDimmer] =
    useOutsideClick(() => setIsCancelBlockMenuOpen(false))

  const isProfileMenuOpen = profileStateData?.isMenuOpen ?? false
  const isFriendMenuOpen = friendStateData?.isMenuOpen ?? false
  const isCutOffMenuOpen = friendStateData?.isCutOffMenuOpen ?? false
  const isBlockMenuOpen = friendStateData?.isBlockMenuOpen ?? false
  const isCancelBlockMenuOpen = friendStateData?.isCancelBlockMenuOpen ?? false
  const menus = [
    {
      menuOpen: isProfileMenuOpen,
      type: 'myProfile',
      ref: profileMenuOutsideRef,
      close: handleClickProfileDimmer,
    },
    {
      menuOpen: isFriendMenuOpen,
      type: 'report',
      ref: friendMenuOutsideRef,
      close: handleClickFriendDimmer,
    },
    {
      menuOpen: isCutOffMenuOpen,
      type: 'cutOffFriend',
      ref: cutOffMenuOutsideRef,
      close: handleClickCutOffDimmer,
    },
    {
      menuOpen: isBlockMenuOpen,
      type: 'block',
      ref: blockMenuOutsideRef,
      close: handleClickBlockDimmer,
    },
    {
      menuOpen: isCancelBlockMenuOpen,
      type: 'cancelBlock',
      ref: cancelBlockMenuOutsideRef,
      close: handleClickCancelBlockDimmer,
    },
  ]

  const { setIsEdit, setIsMenuOpen } = useSetProfileRecoilState()
  const {
    setIsMenuOpen: setIsFriendMenuOpen,
    setIsCutOffMenuOpen,
    setIsBlockMenuOpen,
    setIsCancelBlockMenuOpen,
  } = useSetFriendRecoilState()
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
  }, [isProfileMenuOpen, isFriendMenuOpen, isCutOffMenuOpen, isBlockMenuOpen])

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

  const getSmallCategoryData = (selectedTags: SelectedTag[]) => {
    return selectedTags.length
      ? (selectedTags as SelectedTag[]).map(
          (tag: SelectedTag) => `${tag.value}` as SubCategoryType,
        )
      : selectedProps.map(
          (selectedProp: SelectedPropType) =>
            `${selectedProp.value}` as SubCategoryType,
        )
  }

  const { data: userTagData = [] } = useQuery(
    [
      'filteredUserTag',
      selectedTags,
      !friendData ? auth.userProfile.id : friendId,
    ],
    () =>
      UserApi.GET_USER_TAG(
        !friendData ? auth.userProfile.id : (friendId as number),
        getSmallCategoryData(selectedTags),
      ),
  )

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
    return menu.type === 'cutOffFriend' ||
      menu.type === 'block' ||
      menu.type === 'cancelBlock'
      ? friendData?.userId
      : undefined
  }

  const getFriendImageUrl = (menu: MenuButtonType) => {
    return menu.type === 'cutOffFriend' ||
      menu.type === 'block' ||
      menu.type === 'cancelBlock'
      ? friendData?.thumbnail
      : undefined
  }

  const renderMenuButtons = () => {
    return menus.map(
      (menu, idx) =>
        menu.menuOpen && (
          <div key={idx}>
            <Dimmer dimmerRef={menu.ref} onClick={menu.close} />
            <ProfileMenuButtons
              type={menu.type as ProfileButtonVariant}
              friendId={friendId}
              friendUserId={getFriendUserId(menu)}
              friendImageUrl={getFriendImageUrl(menu)}
            />
          </div>
        ),
    )
  }

  return (
    <>
      <ProfileImage isFriend={friendId !== undefined} />
      <Spacing />
      <Padding size={[0, 16]}>
        <ProfileWrapper>
          <ProfileHeader
            userData={friendData ? friendData : userData}
            addFriend={addFriend}
          />
          {!addFriend ? (
            !friendId ? (
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
                  selectedTags={selectedTags}
                  userTagData={userTagData}
                  isFriend={false}
                />
              </>
            ) : (
              <>
                <Spacing height={24} />
                <UserTagDataListItem
                  selectedProps={selectedProps}
                  selectedTags={selectedTags}
                  userTagData={userTagData}
                  isFriend={friendData?.friend ?? false}
                />
              </>
            )
          ) : (
            <Spacing height={24} />
          )}
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

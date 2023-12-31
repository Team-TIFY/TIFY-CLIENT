import { RefObject, MouseEventHandler } from 'react'

import {
  FilteredUserTag,
  PastTodayAnswerType,
  UserInfoType,
  UserNewTasteCategoryType,
} from '@models/apis/UserType'
import {
  SelectedPropsType,
  SelectedTagType,
  SubCategoryNameType,
  SubCategoryValueType,
} from '@models/favor'
import { TasteBoxVariantType } from '@models/apis/TasteType'

export type SelectedPropType = {
  id: number
  active: boolean
  name: SubCategoryNameType
  value: SubCategoryValueType
}

export type ProfilePropsType<T extends UserInfoType> = {
  userData?: T
  userId?: T extends UserInfoType ? number : undefined
  addFriend?: boolean
}

export type MenuButtonType = {
  menuOpen: boolean
  ref: RefObject<HTMLDivElement>
  type: string
  close: MouseEventHandler<HTMLDivElement>
}

export type ProfileMenuButtonListItemPropsType = {
  userData: UserInfoType
  userId: number
  idx: number
  menu: {
    menuOpen: boolean
    type: ProfileButtonVariantType
    ref: React.RefObject<HTMLDivElement>
    close: React.MouseEventHandler<HTMLDivElement>
  }
}

export type UserTastesPropsType = {
  userTagCountSumData: number
  selectedTags: SelectedTagType[]
  setSelectedTags: React.Dispatch<React.SetStateAction<SelectedTagType[]>>
  userTagData: FilteredUserTag[]
  userData: UserInfoType
}

export type PastTodayListItemPropsType = {
  pastTodayAnswer: PastTodayAnswerType[][]
}

export type EditOnboardingStatusType = {
  value: string
}

export type NewTasteCategoryPropsType = {
  categoryName: string
  subCategoryList: UserNewTasteCategoryType[]
}

export type NewTasteCategoryListItemPropsType = {
  subCategoryList: UserNewTasteCategoryType[]
}

export type ProfileHeaderPropsType = {
  userData: UserInfoType
  addFriend?: boolean
}

export type ProfileHeaderButtonListItemPropsType = {
  buttons: {
    text: string
    onClick?: () => void
  }[]
}

export type ProfileImagePropsType = {
  favorList: TasteBoxVariantType[]
}

export type ProfileButtonVariantType =
  | 'myProfile'
  | 'cutOffFriend'
  | 'report'
  | 'block'
  | 'cancelBlock'
  | 'editProfile'

export type ProfileMenuButtonPropsType<T extends ProfileButtonVariantType> = {
  type: T
  friendUserId?: T extends 'cutOffFriend' | 'block' | 'cancelBlock'
    ? string
    : undefined
  friendImageUrl?: T extends 'cutOffFriend' | 'block' | 'cancelBlock'
    ? string
    : undefined
  friendId?: number
}

export type UserDetailPropsType = {
  userData: UserInfoType
}

export type UserTagDataPropsType = {
  selectedProps: SelectedPropsType
  userTagData: FilteredUserTag[]
  isFriend: boolean
}

import { UserInfo } from '@models/apis/UserType'
import { SubCategoryNameType, SubCategoryValueType } from '@models/favor'
import { RefObject, MouseEventHandler } from 'react'

export type SelectedPropType = {
  id: number
  active: boolean
  name: SubCategoryNameType
  value: SubCategoryValueType
}

export type ProfilePropsType<T extends UserInfo> = {
  userData?: T
  userId?: T extends UserInfo ? number : undefined
  addFriend?: boolean
}

export type MenuButtonType = {
  menuOpen: boolean
  ref: RefObject<HTMLDivElement>
  type: string
  close: MouseEventHandler<HTMLDivElement>
}

import {
  SubCategoryType,
  SelectedProps,
  SelectedTag,
} from '@utils/apis/user/UserType'
import { ButtonHTMLAttributes } from 'react'

export type CategoryAnswerCountType = {
  smallCategory: SubCategoryType
  answerCount: number
}

export interface FilterPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  selectedProps: SelectedProps
  selectedTags: SelectedTag[]
  setSelectedTags: React.Dispatch<React.SetStateAction<SelectedTag[]>>
}

export type PropsType = FilterPropsType & Partial<FilterPropsType>

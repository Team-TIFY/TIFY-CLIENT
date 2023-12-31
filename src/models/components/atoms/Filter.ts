import { SelectedProps } from '@models/apis/UserType'
import { SubCategoryValueType, SelectedTagType } from '@models/common/favor'
import { ButtonHTMLAttributes } from 'react'

export type CategoryAnswerCountType = {
  smallCategory: SubCategoryValueType
  answerCount: number
}

export interface FilterPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  selectedProps: SelectedProps
  selectedTags: SelectedTagType[]
  setSelectedTags: React.Dispatch<React.SetStateAction<SelectedTagType[]>>
}

export type PropsType = FilterPropsType & Partial<FilterPropsType>

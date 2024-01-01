import { ButtonHTMLAttributes } from 'react'

import { SelectedPropsType, SelectedTagType } from '@models/common/favor'

export interface FilterPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  selectedProps: SelectedPropsType
  selectedTags: SelectedTagType[]
  setSelectedTags: React.Dispatch<React.SetStateAction<SelectedTagType[]>>
}

export type PropsType = FilterPropsType & Partial<FilterPropsType>

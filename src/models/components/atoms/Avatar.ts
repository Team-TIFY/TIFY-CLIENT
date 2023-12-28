export type AvatarVariantType = 'xsmall' | 'small' | 'medium'

export type VisibleVariantType = 'visible' | 'invisible'

export type AvatarShapeType = {
  [key in AvatarVariantType]: {
    size: number
  }
}

export type VisibleType = {
  [key in VisibleVariantType]: {
    display: 'none' | 'block'
    bgColor: string
  }
}

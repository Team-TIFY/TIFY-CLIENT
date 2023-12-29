import styled from '@emotion/styled'
import { useCallback, useEffect, useState } from 'react'

import { profileVariants } from '@constants/profileVariants'
import {
  AvatarVariantType,
  VisibleVariantType,
} from '@models/components/atoms/Avatar'
import { AVATAR_SIZE_TYPE, VISIBLE_TYPE } from '@constants/avatar'

/**
 * @param variant 크기 종류를 나타냄 "xsmall" | "small" | "medium" 중 선택 가능함
 * @param isVisible visible 종류를 나타냄 "visible" | "invisible" 중 하나 선택 가능함
 * @param imageUrl 이미지 URL을 나타냄
 */

export type AvatarPropsType = {
  variant: AvatarVariantType
  isVisible?: VisibleVariantType
  imageUrl?: string
}

export const Avatar = ({
  variant,
  isVisible = 'visible',
  imageUrl = '',
}: AvatarPropsType) => {
  const [randomImageUrl, setRandomImageUrl] = useState('')

  const getRandomProfileImage = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * profileVariants.length)

    return profileVariants[randomIndex]
  }, [])

  useEffect(() => {
    if (!imageUrl) {
      setRandomImageUrl(getRandomProfileImage())
    }
  }, [])

  return (
    <Wrapper>
      <Dimmed variant={variant} isVisible={isVisible} />
      <AvatarCircle variant={variant}>
        <img
          src={!imageUrl ? randomImageUrl : imageUrl}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </AvatarCircle>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const BaseStyle = styled.div<{
  variant: AvatarVariantType
}>`
  width: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
  height: ${({ variant }) => `${AVATAR_SIZE_TYPE[variant].size}px`};
`

const Dimmed = styled(BaseStyle)<{
  variant: AvatarVariantType
  isVisible: VisibleVariantType
}>`
  display: ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].display}`};
  border-radius: 50%;
  position: absolute;
  background-color: ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].bgColor}`};
  display: ${({ isVisible }) => `${VISIBLE_TYPE[isVisible].display}`};
`

const AvatarCircle = styled(BaseStyle)<{
  variant: AvatarVariantType
}>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

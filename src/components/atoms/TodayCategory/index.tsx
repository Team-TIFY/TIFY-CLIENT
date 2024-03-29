import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import styled from '@emotion/styled'

import { theme } from '@styles/theme'
import { profileState } from '@libs/store/profile'
import SmallRightChevron from '@assets/icons/SmallRightChevron'
import {
  TodayCategoryPropsType,
  TodayCategoryVariantType,
} from '@models/components/atoms/TodayCategory'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '../Text'
import Svg from '../Svg'

const TodayCategory = ({
  categoryName,
  categoryValue,
  infoCount,
  id,
}: TodayCategoryPropsType) => {
  const [variant, setVariant] = useState<'default' | 'activate'>('default')
  const setProfileStateData = useSetRecoilState(profileState)

  const navigate = useNavigate()

  const handleClickCategory = () => {
    setVariant('activate')
    setProfileStateData((prevState) => ({
      ...prevState,
      pastTodayCategory: categoryValue,
    }))
    navigate(`/profile/pastToday/${id}/detail`)
  }

  return (
    <TodayCategoryWrapper variant={variant} onClick={handleClickCategory}>
      <FlexBox justify="flex-start" gap={16} style={{ width: '208px' }}>
        <ImageWrapper>
          <img
            src="/images/fashionStuff.png"
            style={{ width: '48px', height: '48px' }}
          />
        </ImageWrapper>
        <Text typo="Subhead_16" color="gray_100">
          {categoryName}
        </Text>
      </FlexBox>
      <FlexBox gap={8} style={{ width: '54px' }}>
        <FlexBox justify="flex-end" style={{ width: '30px', height: '20px' }}>
          <Text typo="Caption_12M" color="gray_300">
            {String(infoCount)}
          </Text>
        </FlexBox>
        <Svg
          width={16}
          height={16}
          children={<SmallRightChevron stroke={`${theme.palette.gray_300}`} />}
        />
      </FlexBox>
    </TodayCategoryWrapper>
  )
}

export default TodayCategory

const TodayCategoryWrapper = styled(FlexBox)<{
  variant: TodayCategoryVariantType
}>`
  cursor: pointer;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  padding: 12px 8px 12px 12px;
  border-radius: 12px;
  background-color: ${({ variant }) =>
    variant === 'activate'
      ? `${theme.palette.gray_800}`
      : `${theme.palette.background}`};
`

const ImageWrapper = styled(FlexBox)`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: ${theme.palette.gray_800};
`

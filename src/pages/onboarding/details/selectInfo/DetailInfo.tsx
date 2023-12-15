import styled from '@emotion/styled'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import { SearchInput } from '@components/atoms/Input/SearchInput'
import { RoundButton } from '@components/atoms/RoundButton'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  isCancelState,
  isSearchActiveBtn,
  isSearchInputState,
  onboardingPageState,
  onboardingState,
} from '@libs/store/onboard'
import { ChangeEvent, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { OnboardingApi } from '@utils/apis/onboarding/OnboardingApi'
import { Spacing } from '@components/atoms/Spacing'
import { ChangeStatus } from '@assets/icons/ChangeStatus'
import { theme } from '@styles/theme'
import { useNavigate } from 'react-router-dom'
import { profileState } from '@libs/store/profile'

interface SearchResultItem {
  name: string
  onBoardingStatusId: number
}

export function DetailInfo({ isEdit }: { isEdit: boolean }) {
  const [info, setInfo] = useRecoilState(onboardingState)
  const [goNext, setGoNext] = useRecoilState(onboardingPageState)
  const [btnColor, setBtnColor] = useState<boolean>(false)
  const [searchText, setSearchText] = useRecoilState(isSearchInputState)
  const [randomItems, setRandomItems] = useState<SearchResultItem[]>([])
  const [selectedItemName, setSelectedItemName] = useState<string>('')
  const [selectedIndex, setSelectedIndex] = useRecoilState(isSearchActiveBtn)
  const [isSelectedBtn, setIsSelectedBtn] = useState<boolean>(false)
  const [isCancel, setIsCancel] = useRecoilState(isCancelState)
  const setProfileStateData = useSetRecoilState(profileState)

  const navigate = useNavigate()

  useEffect(() => {
    setProfileStateData((prevState) => ({ ...prevState, isEdit: true }))
  }, [])

  const gotoReg = () => {
    if (btnColor === true) {
      setGoNext({ ...goNext, favor: true })
    } else {
      setGoNext({ ...goNext, favor: false })
    }
  }

  const handleSearchStatusUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSearchText(e.target.value)
    clearSelection()
  }

  const { data: searchResult } = useQuery<SearchResultItem[]>(
    ['searchOnboardStatus', searchText],
    () => OnboardingApi.GET_ONBOARD_STATUS(searchText),
  )

  const updateRandomItems = () => {
    if (searchResult) {
      const availableArr = Array.from(
        { length: searchResult.length },
        (_, index) => index,
      )
      const selectedArr = []

      while (selectedArr.length < 4 && availableArr.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableArr.length)
        const selectedIndex = availableArr[randomIndex]

        selectedArr.push(selectedIndex)
        availableArr.splice(randomIndex, 1)
      }

      const selectedItems = selectedArr.map((index) => searchResult[index])
      setRandomItems(selectedItems)
    } else {
      setRandomItems([])
    }
  }

  const selectItem = (index: number) => {
    setSelectedIndex(index)
    setSelectedItemName(randomItems[index].name)
  }

  const clearSelection = () => {
    setSelectedIndex(-1)
    setSelectedItemName('')
  }

  const handleClickChangeState = () => {
    setInfo((prevInfo) => ({ ...prevInfo, onBoardingState: selectedItemName }))
    navigate('/profile/editProfile')
  }

  useEffect(() => {
    if (searchResult) {
      updateRandomItems()
    }
  }, [searchResult])

  useEffect(() => {
    if (selectedItemName !== '') {
      setBtnColor(true)
    } else {
      setBtnColor(false)
    }

    setInfo({
      ...info,
      onBoardingState: selectedItemName,
    })
  }, [selectedItemName])

  useEffect(() => {
    setSelectedIndex(-1)
  }, [])

  useEffect(() => {
    if (isCancel) {
      setBtnColor(false)
    }
    setIsCancel(false)
  })

  return (
    <DetailInfoWrapper>
      <FlexBox>
        <TextWrap>
          <Text
            children="요즘 어떻게 지내요?"
            typo="SCD_Headline_20"
            color="gray_100"
          />
        </TextWrap>
      </FlexBox>
      <SearchInput
        width={312}
        placeholder="직업, 운동, 학습 등 검색어 입력"
        onBlur={handleSearchStatusUpdate}
        onChange={() => {}}
      />
      <Spacing height={24} />
      <FlexBox>
        <ChangeBtn
          onClick={() => {
            updateRandomItems()
            clearSelection()
          }}
        >
          <Text
            children="다른 메세지 추천"
            typo="Caption_12M"
            color="gray_400"
            style={{ marginRight: '4px' }}
          />
          <ChangeStatus />
        </ChangeBtn>
      </FlexBox>
      <Spacing height={16} />
      <RandomItemList>
        {randomItems.map((item, index) => (
          <RandomItem
            key={index}
            isSelected={index === selectedIndex}
            onClick={() => {
              if (index === selectedIndex) {
                clearSelection()
              } else {
                selectItem(index)
              }
              setIsSelectedBtn(true)
            }}
          >
            <Text children={item.name} typo="Subhead_16" />
          </RandomItem>
        ))}
      </RandomItemList>
      <BottomSticker>
        <RoundButton
          variant="mediumRound"
          width={312}
          children={isEdit ? '상태 변경' : '다음'}
          onClick={isEdit ? handleClickChangeState : gotoReg}
          disabled={!btnColor}
        />
      </BottomSticker>
    </DetailInfoWrapper>
  )
}

const DetailInfoWrapper = styled.div`
  min-height: fit-content;
`

const TextWrap = styled.div`
  margin: 32px 24px;
  width: 312px;
`

const ChangeBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 312px;
  cursor: pointer;
`

const RandomItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 218px;
`

const RandomItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  width: 296px;
  height: 48px;
  border-radius: 6px;
  background-color: ${({ isSelected }) =>
    isSelected ? `${theme.palette.white}` : `${theme.palette.gray_800}`};
  color: ${({ isSelected }) =>
    isSelected ? `${theme.palette.gray_800}` : `${theme.palette.gray_100}`};
  cursor: pointer;
`

const BottomSticker = styled.div`
  position: fixed;
  width: 100%;
  text-align: center;
  left: 0;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

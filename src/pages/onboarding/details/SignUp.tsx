import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import {
  isBtnColorState,
  OnboardingBtnType,
  onboardingPageState,
  pageTempState,
} from '@libs/store/onboard'
import { StartMent } from './signup/StartMent'
import { RoundButton } from '@components/atoms/RoundButton'
import { Spacing } from '@components/atoms/Spacing'
import { Name } from './signup/Name'
import { UserId } from './signup/UserId'
import { Birth } from './signup/Birth'
import { Gender } from './signup/Gender'

export function SignUp() {
  const [infoPage, setInfoPage] = useRecoilState(onboardingPageState)
  const [page, setPage] = useRecoilState(pageTempState)
  const [btnColor, setBtnColor] = useRecoilState(isBtnColorState)

  useEffect(() => {
    if (infoPage.info.username && !infoPage.info.id) {
      setPage('id')
    }
    if (infoPage.info.id && !infoPage.info.birth) {
      setPage('birth')
    }
    if (infoPage.info.birth && !infoPage.info.gender) {
      setPage('gender')
    }
    if (infoPage.info.gender) {
      setInfoPage({
        ...infoPage,
        interestStart: true,
      })
    }
  }, [infoPage.info])

  const gotoReg = (content: keyof OnboardingBtnType) => {
    if (btnColor[content]) {
      setInfoPage({
        ...infoPage,
        info: {
          ...infoPage.info,
          [content]: true,
        },
      })
    } else {
      setInfoPage({ ...infoPage })
    }
  }

  const gotoBack = (content: keyof OnboardingBtnType) => {
    if (content == 'gender') {
      setInfoPage({
        ...infoPage,
        info: {
          ...infoPage.info,
          [content]: false,
        },
      })
      setPage('gender')
    } else if (content == 'birth') {
      setInfoPage({
        ...infoPage,
        info: {
          ...infoPage.info,
          birth: false,
          gender: false,
          id: true,
          username: true,
        },
        agreement: true,
      })
      setPage('birth')
    } else if (content == 'id') {
      setInfoPage({
        ...infoPage,
        info: {
          ...infoPage.info,
          birth: false,
          gender: false,
          id: false,
          username: true,
        },
        agreement: true,
      })
      setPage('id')
    } else if (content == 'username') {
      setInfoPage({
        ...infoPage,
        info: {
          ...infoPage.info,
          birth: false,
          gender: false,
          id: false,
          username: false,
        },
        agreement: true,
      })
      setPage('username')
    }
  }

  return (
    <>
      <SignUpDiv>
        <StartMent />
        <StepDiv step={infoPage.info.birth} onClick={() => gotoBack('gender')}>
          <Gender />
          <Spacing height={48} />
        </StepDiv>
        <StepDiv step={infoPage.info.id} onClick={() => gotoBack('birth')}>
          <Birth />
          <Spacing height={48} />
        </StepDiv>
        <StepDiv
          step={infoPage.info.username}
          onClick={() => {
            gotoBack('id')
          }}
        >
          <UserId />
          <Spacing height={48} />
        </StepDiv>
        <div
          onClick={() => {
            gotoBack('username')
          }}
        >
          <Name />
        </div>
      </SignUpDiv>
      <BottomSticker>
        <RoundButton
          variant="mediumRound"
          width={312}
          children="다음"
          onClick={() => {
            gotoReg(page as keyof OnboardingBtnType)
          }}
          disabled={!btnColor[page as keyof OnboardingBtnType]}
        />
      </BottomSticker>
    </>
  )
}

const SignUpDiv = styled.div`
  min-height: 550px;
  padding-bottom: 100px;
`

const StepDiv = styled.div<{
  step: boolean
}>`
  display: ${({ step }) => (step ? 'block' : 'none')};
`

const BottomSticker = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

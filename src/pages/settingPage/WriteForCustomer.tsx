import { useState, useRef, useEffect, ChangeEvent } from 'react'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'
import { SmallDownChev } from '@assets/icons/SmallDownChev'
import { UpChevron } from '@assets/icons/UpChevron'
import { BasicInput } from '@components/atoms/Input/BasicInput'
import { FlexBox } from '@components/layouts/FlexBox'
import { Text } from '@components/atoms/Text'
import { FileIcon } from '@assets/icons/FileIcon'
import { RoundButton } from '@components/atoms/RoundButton'
import { CustomerCenterApi } from '@apis/setting/SettingApi'
import { useNavigate } from 'react-router-dom'

interface Options {
  title: boolean
  content: boolean
  email: boolean
}

const WriteForCustomer = () => {
  const Options = [
    { key: 0, name: '기능 오류', value: 'FUNCTION_ERROR' },
    { key: 1, name: '브랜드/상품 제안', value: 'BRAND_PRODUCT' },
    { key: 2, name: '투데이/취향 질문 제안', value: 'DAILY_FAVOR_QUESTION' },
    { key: 3, name: '게시물/사용자 신고', value: 'REPORT' },
    { key: 4, name: '사용법 문의', value: 'HOW_TO_USE' },
    { key: 5, name: '기타 문의', value: 'OTHER' },
  ]

  const [currentValue, setCurrentValue] = useState(Options[0].name)
  const [currentOption, setCurrentOption] = useState(Options[0].value)
  const navigate = useNavigate()
  const [titleValue, setTitleValue] = useState<string>('')
  const [contentValue, setContentValue] = useState<string>('')
  const [emailValue, setEmailValue] = useState<string>('')
  const [showOptions, setShowOptions] = useState(false)
  const fileRef = useRef<any>(null)
  const [filename, setFilename] = useState<string>('+ 파일 첨부')
  const [isWritten, setIsWritten] = useState<Options>({
    title: false,
    content: false,
    email: false,
  })
  const [btnColor, setBtnColor] = useState<boolean>(false)
  const selectRef = useRef(null)
  const [error, setError] = useState<Options>({
    title: false,
    content: false,
    email: false,
  })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !(selectRef.current as any).contains(event.target)
      ) {
        setShowOptions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleOptions = () => {
    setShowOptions((prev) => !prev)
  }

  const handleOptionClick = (name: string, value: string) => {
    setCurrentValue(name)
    setCurrentOption(value)
    toggleOptions()
  }

  const handleTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(e.target.value)
    if (e.target.value.length > 20) {
      setError((prevErrors) => ({
        ...prevErrors,
        title: true,
      }))
      setIsWritten((prev) => ({
        ...prev,
        title: false,
      }))
    } else if (e.target.value.length <= 20 && e.target.value.length == 0) {
      setError((prevErrors) => ({
        ...prevErrors,
        title: false,
      })),
        setIsWritten((prev) => ({
          ...prev,
          title: false,
        }))
    } else if (e.target.value.length <= 20 && e.target.value.length > 0) {
      setError((prevErrors) => ({
        ...prevErrors,
        title: false,
      })),
        setIsWritten((prev) => ({
          ...prev,
          title: true,
        }))
    }
  }

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(e.target.value)
    if (e.target.value.length > 200) {
      setError((prevErrors) => ({
        ...prevErrors,
        content: true,
      }))
      setIsWritten((prev) => ({
        ...prev,
        content: false,
      }))
    } else if (e.target.value.length <= 200 && e.target.value.length > 0) {
      setError((prevErrors) => ({
        ...prevErrors,
        content: false,
      })),
        setIsWritten((prev) => ({
          ...prev,
          content: true,
        }))
    } else if (e.target.value.length <= 200 && e.target.value.length == 0) {
      setError((prevErrors) => ({
        ...prevErrors,
        content: false,
      })),
        setIsWritten((prev) => ({
          ...prev,
          content: false,
        }))
    }
  }

  const isValidEmail = (email: string) => {
    // 유효한 이메일인지 판단하는 정규식
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return emailRegex.test(email)
  }

  const handleEmail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEmailValue(e.target.value)
    const value = e.target.value
    if (e.target.value.length > 35) {
      setError((prevErrors) => ({
        ...prevErrors,
        email: true,
      }))
      setIsWritten((prev) => ({
        ...prev,
        email: false,
      }))
    } else if (
      e.target.value.length <= 35 &&
      e.target.value.length != 0 &&
      isValidEmail(value)
    ) {
      setError((prevErrors) => ({
        ...prevErrors,
        email: false,
      })),
        setIsWritten((prev) => ({
          ...prev,
          email: true,
        }))
    } else if (
      e.target.value.length <= 35 &&
      e.target.value.length != 0 &&
      !isValidEmail(value)
    ) {
      setError((prevErrors) => ({
        ...prevErrors,
        email: true,
      })),
        setIsWritten((prev) => ({
          ...prev,
          email: false,
        }))
    } else if (e.target.value.length == 0) {
      setError((prevErrors) => ({
        ...prevErrors,
        email: false,
      })),
        setIsWritten((prev) => ({
          ...prev,
          email: false,
        }))
    }
  }

  const gotoReg = () => {
    if (btnColor === true) {
      // 문의접수 api 호출해서 의견 넘기기
      CustomerCenterApi.POST_OPINION(
        currentOption,
        titleValue,
        contentValue,
        emailValue,
        filename,
      )
        .then((response) => {
          if (response.status === 200) {
            navigate(-1)
          } else {
            console.error('전송 실패:', response.status)
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }

  useEffect(() => {
    if (isWritten.content && isWritten.title && isWritten.email) {
      setBtnColor(true)
    } else {
      setBtnColor(false)
    }
  }, [isWritten.content, isWritten.title, isWritten.email])

  const fileName = () => {
    if (fileRef.current.value !== '') {
      const selectedFile = fileRef.current.value
      setFilename(selectedFile)
    }
  }

  return (
    <Wrapper>
      <FlexBox>
        <SelectBox ref={selectRef} onClick={toggleOptions}>
          <Wrap>
            <Label>{currentValue}</Label>
            {showOptions ? <UpChevron /> : <SmallDownChev />}
          </Wrap>
          <SelectOptions show={showOptions}>
            {Options.map(
              (data) =>
                data.name !== currentValue && (
                  <Option
                    key={data.key}
                    value={data.name}
                    onClick={() => {
                      toggleOptions()
                      handleOptionClick(data.name, data.value)
                    }}
                  >
                    {data.name}
                  </Option>
                ),
            )}
          </SelectOptions>
        </SelectBox>
      </FlexBox>
      <Title>
        <BasicInput
          height={52}
          maxText={21}
          placeholder="제목을 입력해 주세요. (20자 이내)"
          error={error.title}
          warning="20자 이내로 입력해주세요!"
          onChange={handleTitle}
          explanation="제목"
        />
      </Title>
      <Content>
        <BasicInput
          height={200}
          maxText={201}
          placeholder="내용을 입력해 주세요. (200자 이내)"
          error={error.content}
          onInput={handleContent}
          explanation="문의 내용"
          warning="200자 이내로 입력해주세요!"
        />
      </Content>
      <Email>
        <BasicInput
          height={55}
          maxText={36}
          placeholder="답변 받을 이메일 주소*"
          error={error.email}
          warning="유효한 이메일 주소를 입력해주세요."
          onBlur={handleEmail}
          onInput={handleEmail}
        />
      </Email>
      <FileUpload>
        <LabelFile htmlFor="file">
          <Text color="gray_300" typo="Body_14" children={filename} />
          <FileIcon />
        </LabelFile>
        <FileUploader
          type="file"
          name="file"
          id="file"
          ref={fileRef}
          onChange={fileName}
        />
      </FileUpload>
      <div>
        <RoundButton
          variant="mediumRound"
          fullWidth={true}
          children="다음"
          onClick={gotoReg}
          disabled={!btnColor}
        />
      </div>
    </Wrapper>
  )
}

export default WriteForCustomer

const Wrapper = styled.div`
  padding: 20px 24px 0 24px;
  width: 100%;
  height: 100%;
  position: relative;
`
const SelectBox = styled.div`
  width: calc(100% - 48px);
  padding: 16px;
  top: 20px;
  border-radius: 12px;
  position: absolute;
  background-color: ${theme.palette.gray_900};
  border: 2px solid ${theme.palette.gray_700};
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Label = styled.label`
  font-size: 14px;
  height: 20px;
  color: ${theme.palette.white};
  ${theme.typo.Body_14};
`

const Option = styled.li`
  font-size: 14px;
  margin: 16px 0 0 0px;
  height: 16px;
`
const Title = styled.div`
  margin-top: 92px;
  overflow: hidden;
`

const Content = styled.div`
  margin-top: 20px;
`
const Email = styled.div`
  margin-top: 24px;
`
const FileUpload = styled.div`
  background-color: ${theme.palette.gray_900};
  min-height: 52px;
  border: 2px solid ${theme.palette.gray_700};
  padding: 16px;
  border-radius: 12px;
  margin-top: 12px;
  margin-bottom: 36px;
`

const LabelFile = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FileUploader = styled.input`
  display: none;
`

const SelectOptions = styled.ul<{
  show: boolean
}>`
  list-style: none;
  width: 100%;
  overflow: hidden;
  display: ${(props) => (props.show ? 'block' : 'none')};
  padding: 0;
  background-color: ${theme.palette.gray_900};
  color: ${theme.palette.white};
`

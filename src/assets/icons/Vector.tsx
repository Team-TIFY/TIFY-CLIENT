import { FlexBox } from '@components/layouts/FlexBox'
import styled from '@emotion/styled'

interface VectorProps {
  linkUrl?: string
  visible?: string
}

export function Vector({ linkUrl, visible }: VectorProps) {
  const linkToUrl = (e: React.MouseEvent) => {
    e.preventDefault() //이벤트 버블링 방지
    window.open(`https://tify-thisis4u.notion.site/${linkUrl}`)
  }

  return (
    <FlexBox>
      <Cursor visible={visible} onClick={linkToUrl}>
        <svg
          width="16"
          height="12"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9L5 5L1 0.999999"
            stroke="#7F7E87"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Cursor>
    </FlexBox>
  )
}

const Cursor = styled.div<{
  visible?: string
}>`
  cursor: pointer;
  visibility: ${({ visible }) => visible};
`

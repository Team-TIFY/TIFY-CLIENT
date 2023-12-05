import { Spacing } from '@components/atoms/Spacing'
import ShareProfileButtons from '@components/profile/ShareProfileButtons'
import ShareProfileImage from '@components/profile/ShareProfileImage'
import styled from '@emotion/styled'

const ShareProfile = () => {
  return (
    <ShareProfileWrapper>
      <ShareProfileImage />
      <ShareProfileButtons />
      <Spacing height={32} />
    </ShareProfileWrapper>
  )
}

export default ShareProfile

const ShareProfileWrapper = styled.div``

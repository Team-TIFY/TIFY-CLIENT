import styled from '@emotion/styled'

import { Spacing } from '@components/atoms/Spacing'
import ShareProfileButtons from '@components/profile/ShareProfile/ShareProfileButtons'
import ShareProfileImage from '@components/profile/ShareProfile/ShareProfileImage'

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

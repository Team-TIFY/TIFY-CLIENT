import { KeyOfPalette, KeyOfTypo } from '@styles/theme'
import React, { ReactElement } from 'react'
import { Text } from '../Text'
interface TextWithLineBreakInterface {
  data: string
}

const TextWithLineBreak = ({
  data,
}: TextWithLineBreakInterface): ReactElement => {
  const textWithEnter = data.split('\\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== data.split('\\n').length - 1 && <br />}
    </React.Fragment>
  ))
  return <div style={{ textAlign: 'center' }}>{textWithEnter}</div>
}

export default TextWithLineBreak

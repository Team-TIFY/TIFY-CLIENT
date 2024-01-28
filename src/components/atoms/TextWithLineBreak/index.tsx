import { KeyOfPalette, KeyOfTypo } from '@styles/theme'
import React, { ReactElement } from 'react'
import { Text } from '../Text'
interface TextWithLineBreakInterface {
  data: string
  typo?: KeyOfTypo
  color?: KeyOfPalette
}

const TextWithLineBreak = ({
  data,
  typo,
  color,
}: TextWithLineBreakInterface): ReactElement => {
  const textWithEnter = data.split('\\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== data.split('\\n').length - 1 && <br />}
    </React.Fragment>
  ))
  return (
    <Text
      style={{ textAlign: 'center' }}
      typo={typo ? typo : 'Body_16'}
      color={color}
    >
      {textWithEnter}
    </Text>
  )
  return <div style={{ textAlign: 'center' }}>{textWithEnter}</div>
}

export default TextWithLineBreak

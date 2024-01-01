import React, { ReactElement } from 'react'

import { TextWithLineBreakPropsType } from '@models/components/atoms/TextWithLineBreak'

const TextWithLineBreak = ({
  data,
}: TextWithLineBreakPropsType): ReactElement => {
  const textWithEnter = data.split('\\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== data.split('\\n').length - 1 && <br />}
    </React.Fragment>
  ))
  return <div style={{ textAlign: 'center' }}>{textWithEnter}</div>
}

export default TextWithLineBreak

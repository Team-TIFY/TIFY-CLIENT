import { stackflow } from '@stackflow/react'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {},
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
})

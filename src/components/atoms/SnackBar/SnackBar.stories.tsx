import { Meta, StoryObj } from '@storybook/react'

import SnackBar from '.'

const meta = {
  title: 'Atom/SnackBar',
  component: SnackBar,
  tags: ['autodocs'],
} satisfies Meta<typeof SnackBar>

export default meta
type Story = StoryObj<typeof meta>

export const CompleteSnackBar: Story = {
  args: {
    variant: 'complete',
    message: '완료 안내 메시지',
  },
}

export const ErrorSnackBar: Story = {
  args: {
    variant: 'error',
    message: '에러 경고 메시지',
  },
}

export const StingSnackBar: Story = {
  args: {
    variant: 'sting',
    message: '콕 찌르기 메시지',
  },
}

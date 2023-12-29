import { Meta, StoryObj } from '@storybook/react'

import ProfileBox from '.'

const meta = {
  title: 'Atom/ProfileBox',
  component: ProfileBox,
  tags: ['autodocs'],
} as Meta<typeof ProfileBox>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultProfileBox: Story = {
  args: {
    favorList: ['ACCESSORY', 'BAG', 'CUP'],
  },
}

export const ShareProfileBox: Story = {
  args: {
    favorList: ['ACCESSORY', 'BAG', 'CUP'],
    variant: 'shareProfile',
  },
}

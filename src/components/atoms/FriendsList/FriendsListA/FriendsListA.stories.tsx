import { Meta, StoryObj } from '@storybook/react'
import { FriendsListA } from '.'

const meta: Meta<typeof FriendsListA> = {
  title: 'Atom/FriendsListA',
  component: FriendsListA,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const VisibleFriendsList_A: Story = {
  args: {
    name: '김수빈',
    userId: 'beenie',
  },
}

export const InvisibleFriendsList_A: Story = {
  args: {
    variant: 'invisible',
    name: '김수빈',
    userId: 'beenie',
  },
}

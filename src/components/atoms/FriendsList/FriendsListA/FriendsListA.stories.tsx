import { Meta, StoryObj } from '@storybook/react'
import { FriendsListA } from '.'

const meta: Meta<typeof FriendsListA> = {
  title: 'Atom/FriendsList',
  component: FriendsListA,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const visibleFriendsList_A: Story = {
  args: {
    name: '김수빈',
    nickName: 'beenie',
  },
}

export const invisibleFriendsList_A: Story = {
  args: {
    variant: 'invisible',
    name: '김수빈',
    nickName: 'beenie',
  },
}

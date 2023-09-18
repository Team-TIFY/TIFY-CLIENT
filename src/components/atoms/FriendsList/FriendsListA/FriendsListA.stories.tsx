import { Meta, StoryObj } from '@storybook/react'
import { FriendsListA } from '.'

const meta: Meta<typeof FriendsListA> = {
  title: 'Atom/FriendsList',
  component: FriendsListA,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const visibleFriendsListA: Story = {
  args: {
    name: '김수빈',
    nickName: 'beenie',
  },
}

export const invisibleFriendsListA: Story = {
  args: {
    variant: 'invisible',
    name: '김수빈',
    nickName: 'beenie',
  },
}

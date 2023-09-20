import { Meta, StoryObj } from '@storybook/react'
import FriendsListD from '.'

const meta: Meta<typeof FriendsListD> = {
  title: 'Atom/FriendsList',
  component: FriendsListD,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const FriendsList_D: Story = {
  args: {
    nickName: 'sehee_han990821',
    friendsNumber: 6,
  },
}

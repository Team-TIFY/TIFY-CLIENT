import { Meta, StoryObj } from '@storybook/react'
import FriendsListC from '.'

const meta: Meta<typeof FriendsListC> = {
  title: 'Atom/FriendsListC',
  component: FriendsListC,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const FriendsList_C: Story = {
  args: {
    name: '김수빈',
    currentState: '비행기 바라보며 여행 꿈꾸는 중 ✈️',
  },
}

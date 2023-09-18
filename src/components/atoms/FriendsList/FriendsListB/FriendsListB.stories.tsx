import { Meta, StoryObj } from '@storybook/react'
import FriendsListB from '.'

const meta: Meta<typeof FriendsListB> = {
  title: 'Atom/FriendsList',
  component: FriendsListB,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const TodayFriendsListB: Story = {
  args: {
    name: '홍서현',
    currentState: '음악적 재능을 향상시키는 중 🎶🎹',
    description: 'today',
    today: '8월 8일',
  },
}

export const DefaultFriendsListB: Story = {
  args: {
    name: '홍서현',
    currentState: '농구 연습 중 🏀',
    description: 'none',
  },
}

export const NewUpdateFriendsListB: Story = {
  args: {
    name: '홍서현',
    currentState: '음악적 재능을 향상시키는 중 🎶🎹',
    description: 'newUpdate',
  },
}

import { Meta, StoryObj } from '@storybook/react'
import FriendsListB, { FriendsListBPropsA, FriendsListBPropsB } from '.'

const meta: Meta<typeof FriendsListB> = {
  title: 'Atom/FriendsList',
  component: FriendsListB,
  tags: ['autodocs'],
}

export default meta

export const TodayFriendsList_B: StoryObj<FriendsListBPropsA> = {
  args: {
    name: '홍서현',
    currentState: '음악적 재능을 향상시키는 중 🎶🎹',
    description: 'today',
    today: '8월 8일',
  },
}

export const DefaultFriendsList_B: StoryObj<FriendsListBPropsB> = {
  args: {
    name: '홍서현',
    currentState: '농구 연습 중 🏀',
    description: 'none',
  },
}

export const NewUpdateFriendsList_B: StoryObj<FriendsListBPropsB> = {
  args: {
    name: '홍서현',
    currentState: '음악적 재능을 향상시키는 중 🎶🎹',
    description: 'newUpdate',
  },
}

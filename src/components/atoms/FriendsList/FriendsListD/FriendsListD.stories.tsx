import { Meta, StoryObj } from '@storybook/react'

import FriendsListD from '.'

const meta: Meta<typeof FriendsListD> = {
  title: 'Atom/FriendsList/FriendsListD',
  component: FriendsListD,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'FriendsListD는 친구 목록을 나타내는 네 번째 종류입니다.',
  },
  argTypes: {
    userId: {
      name: 'userId',
      description: '친구 아이디입니다.',
      control: {
        type: 'text',
      },
    },
    friendsNumber: {
      name: 'friendsNumber',
      description: '친구 수입니다.',
      control: {
        type: 'number',
      },
    },
    onAcceptButtonClick: {
      name: 'onAcceptButtonClick',
      description: '수락 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수입니다.',
      control: {
        type: 'function',
      },
    },
    onDeleteButtonClick: {
      name: 'onDeleteButtonClick',
      description: '삭제 버튼을 눌렀을 때 발생할 이벤트를 넘겨주는 함수입니다.',
      control: {
        type: 'function',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultFriendsList_D: Story = {
  args: {
    userId: 'sehee_han990821',
    friendsNumber: 6,
  },
}

export const FollowingFriendsList_D: Story = {
  args: {
    userId: 'sehee_han990821',
    isAccepted: true,
    friendsNumber: 6,
  },
}

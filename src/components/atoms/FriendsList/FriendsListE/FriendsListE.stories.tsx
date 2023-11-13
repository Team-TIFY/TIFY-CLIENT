import { Meta, StoryObj } from '@storybook/react'
import FriendsListE from '.'

const meta: Meta<typeof FriendsListE> = {
  title: 'Atom/FriendsList/FriendsListE',
  component: FriendsListE,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'FriendsListE는 친구 목록을 나타내는 다섯 번째 종류입니다.',
  },
  argTypes: {
    userName: {
      name: 'userName',
      description: '친구 이름입니다.',
      control: {
        type: 'text',
      },
    },
    userId: {
      name: 'userId',
      description: '친구 아이디입니다.',
      control: {
        type: 'text',
      },
    },
    imageUrl: {
      name: 'imageUrl',
      description: '친구 프로필 이미지 url입니다.',
      control: {
        type: 'text',
      },
    },
    neighborsNumber: {
      name: 'neighborsNumber',
      description: '해당 친구와 함께 아는 친구 수입니다.',
      control: {
        type: 'number',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const FriendsList_E: Story = {
  args: {
    imageUrl: '',
    userId: 'sehee_han',
    userName: '한세희',
    neighborsNumber: 6,
  },
}

import { Meta, StoryObj } from '@storybook/react'
import FriendsListC from '.'

const meta: Meta<typeof FriendsListC> = {
  title: 'Atom/FriendsList/FriendsListC',
  component: FriendsListC,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'FriendsListC는 친구 목록을 나타내는 세 번째 종류입니다.',
  },
  argTypes: {
    userName: {
      name: 'userName',
      description: '친구 이름입니다.',
      control: {
        type: 'text',
      },
    },
    currentState: {
      name: 'currentState',
      description: '친구의 현재 상태입니다. ex) 헬스장에서 운동 중 🏋️',
      control: {
        type: 'text',
      },
    },
    onClick: {
      name: 'onClick',
      description: '친구 목록 클릭 시 발생할 이벤트를 넘겨주는 함수입니다.',
      control: {
        type: 'function',
      },
    },
    imageUrl: {
      name: 'imageUrl',
      description: '친구 프로필 이미지 url입니다.',
      control: {
        type: 'text',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const FriendsList_C: Story = {
  args: {
    userName: '김수빈',
    currentState: '비행기 바라보며 여행 꿈꾸는 중 ✈️',
  },
}

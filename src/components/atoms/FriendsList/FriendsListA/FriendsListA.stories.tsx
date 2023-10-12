import { Meta, StoryObj } from '@storybook/react'
import { FriendsListA } from '.'

const meta: Meta<typeof FriendsListA> = {
  title: 'Atom/FriendsListA',
  component: FriendsListA,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'FriendsListA는 친구 목록을 나타내는 첫 번째 종류입니다.',
    docs: {
      description: {
        component:
          '- variant 값으로 "visible" | "invisible" 중 하나를 선택할 수 있습니다.',
      },
    },
  },
  argTypes: {
    variant: {
      name: 'variant',
      description:
        '종류를 나타냅니다. "visible" 또는 "invisible"이 가능합니다.',
      control: {
        type: 'select',
        options: ['visible', 'invisible'],
      },
    },
    name: {
      name: 'name',
      description: '친구 이름입니다.',
      control: {
        type: 'text',
      },
    },
    nickName: {
      name: 'nickName',
      description: '친구 닉네임입니다.',
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
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * variant가 "visible"인 FriendsListA를 나타냅니다.
 */
export const VisibleFriendsList_A: Story = {
  args: {
    name: '김수빈',
    nickName: 'beenie',
  },
}

/**
 * variant가 "invisible"인 FriendsListA를 나타냅니다.
 */
export const InvisibleFriendsList_A: Story = {
  args: {
    variant: 'invisible',
    name: '김수빈',
    nickName: 'beenie',
  },
}

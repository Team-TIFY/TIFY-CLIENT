import { Meta, StoryObj } from '@storybook/react'
import FriendsListB from '.'

const meta: Meta<typeof FriendsListB> = {
  title: 'Atom/FriendsList/FriendsListB',
  component: FriendsListB,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      'FriendsListB는 친구 목록을 나타내는 두 번째 종류입니다.',
    docs: {
      description: {
        component: `- description 값으로 "birthday" | "none" | "newUpdate" 중 하나를 선택할 수 있습니다.
- birthdayDescription 값으로 "오늘" | "내일" | "" 중 하나를 선택할 수 있습니다.`,
      },
    },
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
    description: {
      name: 'description',
      description: '친구 이름 하단에 들어갈 설명글입니다.',
      control: {
        type: 'select',
        options: ['birthday', 'none', 'newUpdate'],
      },
    },
    birthdayDescription: {
      name: 'birthdayDescription',
      description: '생일이 언제인지 알려주는 필드입니다.',
      control: {
        type: 'select',
        options: ['오늘', '내일', ''],
      },
    },
    birthday: {
      name: 'birthday',
      description: '생일 일자입니다.',
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

/**
 * description이 "birthday"인 FriendsListB를 나타냅니다.
 */
export const BirthdayFriendsList_B: StoryObj = {
  args: {
    userName: '홍서현',
    currentState: '음악적 재능을 향상시키는 중 🎶🎹',
    description: 'birthday',
    birthdayDescription: '오늘',
    birthday: '8월 8일',
  },
}

/**
 * description이 "none"인 FriendsListB를 나타냅니다.
 */
export const DefaultFriendsList_B: StoryObj = {
  args: {
    userName: '홍서현',
    currentState: '농구 연습 중 🏀',
    description: 'none',
  },
}

/**
 * description이 "newUpdate"인 FriendsListB를 나타냅니다.
 */
export const NewUpdateFriendsList_B: StoryObj = {
  args: {
    userName: '홍서현',
    currentState: '음악적 재능을 향상시키는 중 🎶🎹',
    description: 'newUpdate',
  },
}

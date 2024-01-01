import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '.'

const meta = {
  title: 'Atom/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Avatar는 친구 목록에 들어갈 이미지 컴포넌트입니다.',
    docs: {
      description: {
        component: `- variant 값으로 "xsmall" | "small" | "medium" 중 하나를 선택할 수 있습니다.
- isVisible 값으로 "visible" | "invisible" 중 하나를 선택할 수 있습니다.`,
      },
    },
  },
  argTypes: {
    variant: {
      name: 'variant',
      description:
        '종류를 나타냅니다. "xsmall" | "small" | "medium" 중 하나 선택 가능합니다.',
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium'],
      },
    },
    isVisible: {
      name: 'isVisible',
      description:
        'visible 종류를 나타냅니다. "visible" | "invisible" 중 하나 선택 가능합니다.',
      control: {
        type: 'select',
        options: ['visible', 'invisible'],
      },
    },
    imageUrl: {
      name: 'imageUrl',
      description: '아바타에 들어갈 이미지 URL을 나타냅니다.',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

/**
 * variant가 xsmall, isVisible이 visible인 아바타 컴포넌트입니다.
 */
export const VisibleAvatar: Story = {
  args: {
    variant: 'xsmall',
    isVisible: 'visible',
  },
}

/**
 * variant가 xsmall, isVisible이 invisible인 아바타 컴포넌트입니다.
 */
export const InvisibleAvatar: Story = {
  args: {
    variant: 'xsmall',
    isVisible: 'invisible',
  },
}

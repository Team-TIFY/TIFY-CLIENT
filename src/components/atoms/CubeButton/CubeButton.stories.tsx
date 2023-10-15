import { Meta, StoryObj } from '@storybook/react'
import CubeButton from '.'

const meta = {
  title: 'Atom/Button/CubeButton',
  component: CubeButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'CubeButton은 카테고리를 보여줄 버튼입니다.',
    docs: {
      description: {
        component:
          '- variant 값으로 "unSelected" | "selected" | "disabled" 중 하나를 선택할 수 있습니다.',
      },
    },
  },
  argTypes: {
    variant: {
      name: 'variant',
      description:
        '종류를 나타냅니다. "unSelected" | "selected" | "disabled" 중 하나 선택 가능합니다.',
      control: {
        type: 'select',
        options: ['unSelected', 'selected', 'disabled'],
      },
    },
    img: {
      name: 'img',
      description: '버튼에 들어갈 이미지 url을 나타냅니다.',
      control: {
        type: 'text',
      },
    },
    text: {
      name: 'text',
      description: '버튼에 들어갈 텍스트를 나타냅니다.',
      control: {
        type: 'text',
      },
    },
    onClick: {
      name: 'onClick',
      description: '버튼 클릭 시 발생할 이벤트를 넘겨주는 함수입니다.',
      control: {
        type: 'function',
      },
    },
  },
} satisfies Meta<typeof CubeButton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * variant가 unSelected인 CubeButton입니다.
 */
export const UnSelected: Story = {
  args: {
    variant: 'unSelected',
    text: '립메이크업',
    img: '/images/makeup.png',
  },
}

/**
 * variant가 selected인 CubeButton입니다.
 */
export const Selected: Story = {
  args: {
    variant: 'selected',
    text: '립메이크업',
    img: '/images/makeup.png',
  },
}

/**
 * variant가 disabled인 CubeButton입니다.
 */
export const Disabled: Story = {
  args: {
    variant: 'disabled',
    text: '립메이크업',
    img: '/images/makeup.png',
  },
}

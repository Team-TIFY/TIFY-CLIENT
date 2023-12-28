import { StoryObj, Meta } from '@storybook/react'
import { Tag } from '.'

const meta = {
  title: 'Atom/Category/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Tag는 사용자 취향을 나타내는 컴포넌트입니다.',
    docs: {
      description: {
        component:
          '- index 값으로 0 | 1 | 2 | 3 | 4 | 5 중 하나를 선택할 수 있습니다.',
      },
    },
  },
  argTypes: {
    children: {
      name: 'children',
      description: '태그 컴포넌트에 들어갈 텍스트를 나타냅니다.',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

/**
 * index가 1인 태그를 나타냅니다.
 */
export const Main: Story = {
  args: {
    children: '여름쿨톤',
    colorIndex: 0,
    iconIndex: 0,
    smallCategory: '',
    detailCategory: '',
    answerNumber: 0,
  },
}

/**
 * index가 3인 태그를 나타냅니다.
 */
export const Dark: Story = {
  args: {
    children: '웨이크메이크',
    colorIndex: 0,
    iconIndex: 0,
    smallCategory: '',
    detailCategory: '',
    answerNumber: 0,
  },
}

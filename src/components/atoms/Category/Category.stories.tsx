import { Meta, StoryObj } from '@storybook/react'

import { Category } from '.'
import { Tag } from '../Tag'

const meta = {
  title: 'Atom/Category',
  component: Category,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Category는 친구 취향을 나타내는 컴포넌트입니다.',
  },
  argTypes: {
    categoryName: {
      name: 'categoryName',
      description: '카테고리명입니다.',
      control: {
        type: 'text',
      },
    },
    isFriend: {
      name: 'isFriend',
      description: '친구 프로필인지 내 프로필인지 여부를 나타냅니다.',
      control: {
        type: 'boolean',
      },
    },
    children: {
      name: 'children',
      description: '카테고리 내부에 보여줄 태그 컴포넌트 배열을 나타냅니다.',
      control: {
        type: 'array',
      },
    },
    onButtonClick: {
      name: 'onButtonClick',
      description: '+ / 선물 버튼 클릭 시 발생할 이벤트를 넘겨주는 함수입니다.',
      control: {
        type: 'function',
      },
    },
  },
} as Meta<typeof Category>

export default meta
type Story = StoryObj<typeof meta>

export const MakeupCategory: Story = {
  args: {
    categoryName: '메이크업',
    children: [
      <Tag
        key={0}
        children="여름쿨톤"
        colorIndex={0}
        iconIndex={2}
        smallCategory="MAKEUP"
        detailCategory="LIP"
        answerNumber={0}
      />,
      <Tag
        key={1}
        colorIndex={1}
        iconIndex={3}
        smallCategory="MAKEUP"
        detailCategory="LIP"
        answerNumber={0}
        children="글로시 립"
      />,
      <Tag
        key={2}
        colorIndex={2}
        iconIndex={2}
        smallCategory="MAKEUP"
        detailCategory="LIP"
        answerNumber={0}
        children="페리페라"
      />,
      <Tag
        key={3}
        colorIndex={3}
        iconIndex={3}
        smallCategory="MAKEUP"
        detailCategory="LIP"
        answerNumber={0}
        children="페리페라"
      />,
      <Tag
        key={4}
        colorIndex={4}
        iconIndex={2}
        smallCategory="MAKEUP"
        detailCategory="LIP"
        answerNumber={0}
        children="페리페라"
      />,
      <Tag
        key={5}
        colorIndex={5}
        iconIndex={3}
        smallCategory="MAKEUP"
        detailCategory="LIP"
        answerNumber={0}
        children="페리페라"
      />,
    ],
  },
}

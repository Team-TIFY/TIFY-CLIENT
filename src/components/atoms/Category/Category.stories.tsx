import { Meta, StoryObj } from '@storybook/react'
import { Category } from '.'
import { Tag } from '../Tag'

const meta = {
  title: 'Atom/Category',
  component: Category,
  tags: ['autodocs'],
} as Meta<typeof Category>

export default meta
type Story = StoryObj<typeof meta>

export const category: Story = {
  args: {
    categoryName: '카테고리명',
    children: [
      <Tag key={0} index={0} children="여름쿨톤" />,
      <Tag key={1} index={1} children="글로시 립" />,
      <Tag key={2} index={2} children="페리페라" />,
      <Tag key={3} index={3} children="페리페라" />,
      <Tag key={4} index={4} children="페리페라" />,
      <Tag key={5} index={5} children="페리페라" />,
    ],
  },
}

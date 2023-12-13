import { Meta, StoryObj } from '@storybook/react'
import TodayCategory from '.'

const meta = {
  title: 'Atom/TodayCategory',
  component: TodayCategory,
  tags: ['autodocs'],
} satisfies Meta<typeof TodayCategory>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTodayCategory: Story = {
  args: {
    categoryName: '음식',
    categoryValue: 'FOOD',
    infoCount: 12,
    id: 0,
  },
}

export const ActivateTodayCategory: Story = {
  args: {
    categoryName: '음식',
    categoryValue: 'FOOD',
    infoCount: 12,
    id: 1,
  },
}

import { Meta, StoryObj } from '@storybook/react'
import TodayCategoryList from '.'

const meta = {
  title: 'Atom/TodayCategoryList',
  component: TodayCategoryList,
  tags: ['autodocs'],
} satisfies Meta<typeof TodayCategoryList>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTodayCategoryList: Story = {
  args: {},
}

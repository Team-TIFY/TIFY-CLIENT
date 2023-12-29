import { Meta, StoryObj } from '@storybook/react'

import { WeekGroup } from '@components/atoms/DayWeek/WeekGroup'

const meta = {
  title: 'Atom/Week/WeekGroup',
  component: WeekGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof WeekGroup>

export default meta
type Story = StoryObj<typeof meta>

export const WeekComponent: Story = {}

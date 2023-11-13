import { Meta, StoryObj } from '@storybook/react'
import { Day } from '.'

const meta = {
  title: 'Atom/Week/Day',
  component: Day,
  tags: ['autodocs'],
} satisfies Meta<typeof Day>

export default meta
type Story = StoryObj<typeof meta>

export const DayBeforeRightUp: Story = {
  args: {
    children: 'M',
    variant: 'dayBefore',
    leftDown: false,
  },
}

export const DayBeforeLeftDown: Story = {
  args: {
    children: 'M',
    variant: 'dayBefore',
    leftDown: true,
  },
}

export const SelectedRightUp: Story = {
  args: {
    children: 'M',
    variant: 'selected',
    leftDown: false,
  },
}

export const SelectedLeftDown: Story = {
  args: {
    children: 'M',
    variant: 'selected',
    leftDown: true,
  },
}

export const DayAfterRightUp: Story = {
  args: {
    children: 'M',
    variant: 'dayAfter',
    leftDown: false,
  },
}

export const DayAfterLeftDown: Story = {
  args: {
    children: 'M',
    variant: 'dayAfter',
    leftDown: true,
  },
}

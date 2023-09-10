import { Meta, StoryObj } from '@storybook/react'
import { Day } from '.'

const meta = {
  title: 'Atom/Day',
  component: Day,
  tags: ['autodocs'],
} satisfies Meta<typeof Day>

export default meta
type Story = StoryObj<typeof meta>

export const dayBeforeRightUp: Story = {
  args: {
    children: 'M',
    variant: 'dayBefore',
    leftDown: false,
  },
}

export const dayBeforeLeftDown: Story = {
  args: {
    children: 'M',
    variant: 'dayBefore',
    leftDown: true,
  },
}

export const selectedRightUp: Story = {
  args: {
    children: 'M',
    variant: 'selected',
    leftDown: false,
  },
}

export const selectedLeftDown: Story = {
  args: {
    children: 'M',
    variant: 'selected',
    leftDown: true,
  },
}

export const dayAfterRightUp: Story = {
  args: {
    children: 'M',
    variant: 'dayAfter',
    leftDown: false,
  },
}

export const dayAfterLeftDown: Story = {
  args: {
    children: 'M',
    variant: 'dayAfter',
    leftDown: true,
  },
}

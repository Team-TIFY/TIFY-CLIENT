import { Meta, StoryObj } from '@storybook/react'
import { WeekGroup } from '.'

const meta = {
  title: 'Atom/WeekGroup',
  component: WeekGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof WeekGroup>

export default meta
type Story = StoryObj<typeof meta>

export const weekGroup: Story = {}

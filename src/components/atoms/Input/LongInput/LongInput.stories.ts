import { Meta, StoryObj } from '@storybook/react'
import { LongInput } from '.'

const meta = {
  title: 'Atom/Input/LongInput',
  component: LongInput,
  tags: ['autodocs'],
} satisfies Meta<typeof LongInput>

export default meta
type Story = StoryObj<typeof meta>

export const LongTextInput: Story = {
  args: {
    variant: 'default',
    explanation: '',
  },
}

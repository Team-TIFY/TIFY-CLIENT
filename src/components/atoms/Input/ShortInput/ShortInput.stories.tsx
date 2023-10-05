import { Meta, StoryObj } from '@storybook/react'
import { ShortInput } from '.'

const meta = {
  title: 'Atom/ShortInput',
  component: ShortInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ShortInput>

export default meta
type Story = StoryObj<typeof meta>

export const ShortTextInput: Story = {
  args: {
    variant: 'default',
    maxText: 0,
    explanation: '',
    width: 312,
    placeholder: '',
    error: false,
    warning: '',
    content: '',
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from '.'

const meta = {
  title: 'Atom/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const ShortTextInput: Story = {
  args: {
    width: 312,
    placeholder: '',
  },
}

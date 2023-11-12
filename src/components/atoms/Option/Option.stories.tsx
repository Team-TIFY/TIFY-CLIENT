import { Meta, StoryObj } from '@storybook/react'
import Option from '.'

const meta: Meta<typeof Option> = {
  title: 'Atom/Option',
  component: Option,
  tags: ['autodocs'],
  parameters: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const NewOption: Story = {
  args: {
    variant: 'new',
  },
}

export const AccountOption: Story = {
  args: {
    variant: 'account',
  },
}

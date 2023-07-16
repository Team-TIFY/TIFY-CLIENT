import { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    variant: 'default',
    explanation:"",
  },
};


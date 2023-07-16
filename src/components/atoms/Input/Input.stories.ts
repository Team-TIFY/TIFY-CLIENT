import { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta = {
  title: 'Atom/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    variant: 'default',
    children: ''
  },
};

export const WithInstInput: Story = {
  args: {
    variant: 'withInst',
    children:'설명 문구'
  },
}

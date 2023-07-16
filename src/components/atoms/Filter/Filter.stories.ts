import type { Meta, StoryObj } from '@storybook/react';
import { Filter } from '.';

const meta = {
  title: 'Atom/Filter',
  component: Filter,
  tags: ['autodocs'],
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicFilter: Story = {
  // args: {

  // },
};

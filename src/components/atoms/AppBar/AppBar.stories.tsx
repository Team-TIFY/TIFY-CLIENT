import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from '.';

const meta = {
  title: 'Atom/AppBar',
  component: AppBar,
  tags: ['autodocs'],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlarmWithMenu: Story = {
  args: {
    variant:'logoWithAlarm',
    label: '안녕하쇼'
  },
};

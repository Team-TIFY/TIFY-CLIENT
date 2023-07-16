import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta =  {
  title: 'Atom/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const text: Story = {
    args: {
        children: 'Tify',
        typo: 'SCD_Headline_24',
        as: 'span',
    }
};
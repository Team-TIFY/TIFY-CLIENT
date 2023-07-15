import { Meta, StoryObj } from "@storybook/react";
import { Week } from ".";

const meta = {
  title: 'Atom/Week',
  component: Week,
  tags: ['autodocs'],
} satisfies Meta<typeof Week>;

export default meta;
type Story = StoryObj<typeof meta>;

export const week: Story = {
  args: {
    today: 3
  }
}
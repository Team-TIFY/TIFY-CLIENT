import { StoryObj, Meta } from '@storybook/react';
import { Tag } from ".";

const meta = {
  title: 'Atom/Tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: "여름쿨톤",
    variant: "main",
    color: "purple"
  }
}

export const Dark: Story = {
  args: {
    children: "웨이크메이크",
    variant: "dark",
    color: "purple"
  }
}
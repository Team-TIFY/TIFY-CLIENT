import { Meta, StoryObj } from "@storybook/react";
import { FriendsList } from ".";

const meta: Meta<typeof FriendsList> = {
  title: 'Atom/FriendsList',
  component: FriendsList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const visibleFriendsList: Story = {
  args: {
    name: '김수빈',
    nickName: 'beenie',
  },
};

export const invisibleFriendsList: Story = {
  args: {
    variant: 'invisible',
    name: '김수빈',
    nickName: 'beenie',
  },
};
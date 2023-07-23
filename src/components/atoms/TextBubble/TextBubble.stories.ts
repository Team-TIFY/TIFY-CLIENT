import type { Meta, StoryObj } from '@storybook/react';
import { TextBubble } from '.';

const meta =  {
  title: 'Atom/TextBubble',
  component: TextBubble,
  tags: ['autodocs'],
} satisfies Meta<typeof TextBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const New: Story = {
    args: {
      variant: "new",
      nickname: "닉네임",
      reply: "답변 내용",
      imageUrl: "kitty",
    }
};

export const Old: Story = {
    args: {
    variant: "old",
    nickname: "닉네임",
    reply: "답변 내용",
    imageUrl: "kitty",
    }
};

export const Older: Story = {
    args: {
    variant: "older",     
    nickname: "닉네임",
    reply: "...",
    imageUrl: "kitty",
    }
};
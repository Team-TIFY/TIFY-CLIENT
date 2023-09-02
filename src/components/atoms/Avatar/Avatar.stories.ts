import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta = {
  title: "Atom/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VisibleAvatar: Story = {
  args: {
    variant: "xsmall",
    isVisible: "visible",
  }
}

export const InvisibleAvatar: Story = {
  args: {
    variant: "xsmall",
    isVisible: "invisible",
  }
}
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta = {
  title: "Atom/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Xsmall: Story = {
  args: {
    variant: "xsmall",
    color: "purple",
    imageUrl: "kitty",
  }
};

export const Small: Story = {
  args: {
    variant: "small",
    color: "purple",
        imageUrl: "kitty",
  }
};

export const Medium: Story = {
  args: {
    variant: "medium",
    color: "purple",
        imageUrl: "kitty",
  }
};
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta = {
  title: "Atom/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pink1: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "pink1",
    isVisible: "visible",
  }
};

export const Pink2: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "pink2",
    isVisible: "visible",
  }
};

export const Pink3: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "pink3",
    isVisible: "visible",
  }
};

export const Pink4: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "pink4",
    isVisible: "visible",
  }
};

export const Purple1: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "purple1",
    isVisible: "visible",
  }
};

export const Purple2: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "purple2",
    isVisible: "visible",
  }
};

export const Purple3: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "purple3",
    isVisible: "visible",
  }
};

export const Purple4: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "purple4",
    isVisible: "visible",
  }
};

export const White1: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "white1",
    isVisible: "visible",
  }
};

export const White2: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "white2",
    isVisible: "visible",
  }
};

export const White3: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "white3",
    isVisible: "visible",
  }
};

export const White4: Story = {
  args: {
    variant: "xsmall",
    imageUrl: "white4",
    isVisible: "visible",
  }
};
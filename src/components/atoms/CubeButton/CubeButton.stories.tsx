import DimmedLipStick from "@assets/image/DimmedLipStick";
import LipStick from "@assets/image/LipStick";
import { Meta, StoryObj } from "@storybook/react";
import CubeButton from ".";

const meta = {
  title: 'Atom/CubeButton',
  component: CubeButton,
  tags: ["autodocs"]
} satisfies Meta<typeof CubeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnSelected: Story = {
  args: {
    variant: 'unSelected',
    text: "립메이크업",
    img: <LipStick />
  }
};

export const Selected: Story = {
  args: {
    variant: 'selected',
    text: "립메이크업",
    img: <LipStick />
  }
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    text: "립메이크업",
    img: <DimmedLipStick />
  }
};
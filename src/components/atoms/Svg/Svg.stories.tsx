import Dots from "@assets/icons/Dots";
import { Meta, StoryObj } from "@storybook/react";
import Svg from ".";
import { Tag } from "../Tag";

const meta = {
  title: 'Atom/Svg',
  component: Svg,
  tags: ['autodocs']
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const dots: Story = {
  args: {
    children: <Dots />
  }
}
import { Meta, StoryObj } from "@storybook/react";
import { Category } from ".";
import { Tag } from "../Tag";

const meta = {
  title: "Atom/Category",
  component: Category,
  tags: ["autodocs"],
} as Meta<typeof Category>;

export default meta;
type Story = StoryObj<typeof meta>;

export const category: Story = {
  args: {
    categoryName: "카테고리명",
    children: [
      <Tag variant={"main"} color={"purple"} children={"여름쿨톤"} />,
      <Tag variant={"main"} color={"pink"} children={"글로시 립"} />,
      <Tag variant={"dark"} color={"purple"} children={"페리페라"} />,
      <Tag variant={"dark"} color={"pink"} children={"페리페라"} />,
      <Tag variant={"main"} color={"purple"} children={"페리페라"} />,
      <Tag variant={"dark"} color={"purple"} children={"페리페라"} />,
    ],
  },
};
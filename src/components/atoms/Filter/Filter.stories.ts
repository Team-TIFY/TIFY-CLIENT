import type { Meta, StoryObj } from "@storybook/react";
import { Filter } from ".";

const meta = {
  title: "Atom/Filter",
  component: Filter,
  tags: ["autodocs"],
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicFilter: Story = {
  args: {
    selectedProps: [
      {
        id: 1,
        active: false,
        value:"메이크업",
      },
      {
        id: 2,
        active: false,
        value: "프레그런스"
      },
      {
        id: 3,
        active: false,
        value:"의류",
      },
      {
        id: 4,
        active: false,
        value:"잡화",
      },
      {
        id: 5,
        active: false,
        value:"액세사리",
      },
      {
        id: 6,
        active: false,
        value:"요리",
      },
      {
        id: 7,
        active: false,
        value:"운동",
      },
      {
        id: 8,
        active: false,
        value:"여행",
      },
      {
        id: 9,
        active: false,
        value:"문화생활",
      },
    ]
  }
};
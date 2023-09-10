import type { Meta, StoryObj } from '@storybook/react'
import { Filter } from '.'

const meta = {
  title: 'Atom/Filter',
  component: Filter,
  tags: ['autodocs'],
} satisfies Meta<typeof Filter>

export default meta
type Story = StoryObj<typeof meta>

export const BasicFilter: Story = {
  args: {
    selectedProps: [
      {
        id: 1,
        active: false,
        value: 'MAKEUP',
        name: '메이크업',
      },
      {
        id: 2,
        active: false,
        name: '프레그런스',
        value: 'PERFUME',
      },
      {
        id: 3,
        active: false,
        name: '의류',
        value: 'CLOTHES',
      },
      {
        id: 4,
        active: false,
        name: '잡화',
        value: 'CULTURALLIFE',
      },
      {
        id: 5,
        active: false,
        name: '액세사리',
        value: 'ACCESSORY',
      },
      {
        id: 6,
        active: false,
        name: '요리',
        value: 'COOKING',
      },
      {
        id: 7,
        active: false,
        name: '운동',
        value: 'SPORTS',
      },
      {
        id: 8,
        active: false,
        name: '여행',
        value: 'TRIP',
      },
      {
        id: 9,
        active: false,
        name: '문화생활',
        value: 'CULTURALLIFE',
      },
    ],
  },
}

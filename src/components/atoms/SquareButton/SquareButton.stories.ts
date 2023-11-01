import type { Meta, StoryObj } from '@storybook/react'
import SquareButton from '.'

const meta = {
  title: 'Atom/Button/SquareButton',
  component: SquareButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'xlargeSquare',
        'largeSquare',
        'mediumSquare',
        'medium2Square',
        'medium3Square',
        'smallSquare',
        'xsmallSquareP',
        'xsmallSquareS',
      ],
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof SquareButton>

export default meta
type Story = StoryObj<typeof meta>

export const XlargeSquare: Story = {
  args: {
    variant: 'xlargeSquare',
    subVariant: 'default',
    children: '줄글',
    xlargeChildren: '줄글',
  },
}

export const LargeSquare: Story = {
  args: {
    variant: 'largeSquare',
    subVariant: 'default',
    children: '버튼 이름',
  },
}

export const MediumSquare: Story = {
  args: {
    variant: 'mediumSquare',
    subVariant: 'default',
    children: '버튼 이름',
  },
}

export const Medium2Square: Story = {
  args: {
    variant: 'medium2Square',
    subVariant: 'default',
    children: '버튼 이름',
  },
}

export const Medium3Square: Story = {
  args: {
    variant: 'medium3Square',
    subVariant: 'default',
    children: '버튼 이름',
  },
}

export const SmallSquare: Story = {
  args: {
    variant: 'smallSquare',
    subVariant: 'default',
    children: '신고하기',
  },
}

export const XsmallSquareP: Story = {
  args: {
    variant: 'xsmallSquareP',
    subVariant: 'default',
    children: '수락',
  },
}

export const XsmallSquareS: Story = {
  args: {
    variant: 'xsmallSquareS',
    subVariant: 'default',
    children: '삭제',
  },
}

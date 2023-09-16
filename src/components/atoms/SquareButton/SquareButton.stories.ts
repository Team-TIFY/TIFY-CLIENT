import type { Meta, StoryObj } from '@storybook/react'
import SquareButton from '.'

const meta = {
  title: 'Atom/SquareButton',
  component: SquareButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
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

export const mediumSquare: Story = {
  args: {
    variant: 'mediumSquare',
    children: '버튼 이름',
  },
}

export const medium2Square: Story = {
  args: {
    variant: 'medium2Square',
    children: '버튼 이름',
  },
}

export const medium3Square: Story = {
  args: {
    variant: 'medium3Square',
    children: '버튼 이름',
  },
}

export const smallSquare: Story = {
  args: {
    variant: 'smallSquare',
    children: '버튼 이름',
  },
}

export const xsmallSquareP: Story = {
  args: {
    variant: 'xsmallSquareP',
    children: '수락',
  },
}

export const xsmallSquareS: Story = {
  args: {
    variant: 'xsmallSquareS',
    children: '삭제',
  },
}

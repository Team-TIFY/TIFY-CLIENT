import OnAlert from '@assets/icons/OnAlert'
import type { Meta, StoryObj } from '@storybook/react'
import { Routes, Route } from 'react-router-dom'
import { AppBar, AppBarProps } from '.'
import Svg from '../Svg'

const meta = {
  title: 'Atom/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  argTypes: {
    onClickOption1: { action: 'clicked' },
    onClickOption2: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <Routes>
        <Route path="*" element={<Story />} />
      </Routes>
    ),
  ],
} satisfies Meta<typeof AppBar>

export default meta
type Story = StoryObj<AppBarProps>

export const BackPushWithTitleWithAlarm: Story = {
  args: {
    variant: 'backPushWithTitle',
    label: '제목',
    rightChildren: 'alarm',
  },
}

export const BackPushWithTitleWithDots: Story = {
  args: {
    variant: 'backPushWithTitle',
    label: '제목',
    rightChildren: 'dots',
  },
}

export const BackPushWithTitleWithNone: Story = {
  args: {
    variant: 'backPushWithTitle',
    label: '제목',
    rightChildren: 'none',
  },
}

export const BackPushWithTitleWithActionButton: Story = {
  args: {
    variant: 'backPushWithTitle',
    label: '제목',
    rightChildren: 'actionButton',
    rightChildrenIcon: <Svg children={<OnAlert />} />,
  },
}

export const TitleWithAlarm: Story = {
  args: {
    variant: 'title',
    label: '제목',
    rightChildren: 'alarm',
  },
}

export const TitleWithDots: Story = {
  args: {
    variant: 'title',
    label: '제목',
    rightChildren: 'dots',
  },
}

export const TitleWithNone: Story = {
  args: {
    variant: 'title',
    label: '제목',
    rightChildren: 'none',
  },
}

export const TitleWithActionButton: Story = {
  args: {
    variant: 'title',
    label: '제목',
    rightChildren: 'actionButton',
    rightChildrenIcon: <Svg children={<OnAlert />} />,
  },
}

export const BackPushWithAlarm: Story = {
  args: {
    variant: 'backPush',
    label: '제목',
    rightChildren: 'alarm',
  },
}

export const BackPushWithDots: Story = {
  args: {
    variant: 'backPush',
    label: '제목',
    rightChildren: 'dots',
  },
}

export const BackPushWithNone: Story = {
  args: {
    variant: 'backPush',
    label: '제목',
    rightChildren: 'none',
  },
}

export const BackPushWithActionButton: Story = {
  args: {
    variant: 'backPush',
    label: '제목',
    rightChildren: 'actionButton',
    rightChildrenIcon: <Svg children={<OnAlert />} />,
  },
}

export const LogoWithAlarm: Story = {
  args: {
    variant: 'logo',
    label: '제목',
    rightChildren: 'alarm',
  },
}

export const LogoWithDots: Story = {
  args: {
    variant: 'logo',
    label: '제목',
    rightChildren: 'dots',
  },
}

export const LogoWithNone: Story = {
  args: {
    variant: 'logo',
    label: '제목',
    rightChildren: 'none',
  },
}

export const LogoWithActionButton: Story = {
  args: {
    variant: 'logo',
    label: '제목',
    rightChildren: 'actionButton',
    rightChildrenIcon: <Svg children={<OnAlert />} />,
  },
}

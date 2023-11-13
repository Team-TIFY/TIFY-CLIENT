import OnAlert from '@assets/icons/OnAlert'
import type { Meta, StoryObj } from '@storybook/react'
import { Routes, Route } from 'react-router-dom'
import { AppBar, AppBarProps, RightChildrenVariant } from '.'
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
type Story = StoryObj<AppBarProps<RightChildrenVariant>>

export const BackPushWithTitleWithAlarm: Story = {
  args: {
    variant: 'backPushWithTitle',
    label: '제목',
    rightChildren: 'alarm',
  },
}

export const TitleWithAlarm: Story = {
  args: {
    variant: 'title',
    label: '제목',
    rightChildren: 'alarm',
  },
}

export const BackPushWithAlarm: Story = {
  args: {
    variant: 'backPush',
    label: '제목',
    rightChildren: 'alarm',
  },
}

export const LogoWithAlarm: Story = {
  args: {
    variant: 'logo',
    label: '제목',
    rightChildren: 'alarm',
  },
}

export const BackPush: Story = {
  args: {
    variant: 'backPush',
    label: '프로필 수정',
    rightChildren: 'none',
    isLabelAlignCenter: true,
  },
}

import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppBar } from '.';

const meta = {
  title: 'Atom/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  argTypes: { onClickOption: {action: 'clicked'}},
  decorators: [
    (Story) => (
          <Routes>
            <Route path="*" element={<Story/>}/>
          </Routes>
    ),
  ],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoWithAlarm: Story = {
  args: {
    variant:'logoWithAlarm',
  },
};

export const BackPushWithMenu: Story = {
  args: {
    variant:'backPushWithMenu',
    label: '데일리 질문',
  },
};

export const backPush: Story = {
  args: {
    variant:'backPush',
    label: '친구 목록 편집',
  },
};

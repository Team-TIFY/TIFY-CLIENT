import type { Meta, StoryObj } from '@storybook/react';
import { RoundButton } from '.';
import { Text } from '../Text';

const meta = {
  title: 'Atom/RoundButton',
  component: RoundButton,
  tags: ['autodocs'],
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MediumRound: Story = {
  args: {
    variant:'mediumRound',
    children: '버튼 이름'
  },
};

export const SmallRound: Story = {
  args: {
    variant: 'smallRound',
    children: '답변 안한 친구 찌르러 가기 👉'
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    children: '+'
  },
};

export const Kakao: Story = {
  args: {
    variant: 'kakao',
    children: '카카오로 로그인하기'
  },
};

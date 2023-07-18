import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Navigationbar } from '.';

const meta =  {
  title: 'Atom/Navigationbar',
  component: Navigationbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navigationbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = {

};
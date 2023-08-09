import type { Meta, StoryObj } from '@storybook/react';
import { Navigationbar } from '.';
import { Routes, Route } from 'react-router-dom';
const meta =  {
  title: 'Atom/Navigationbar',
  component: Navigationbar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Routes>
        <Route path="*" element={<Story/>}/>
      </Routes>
    )
  ]
} satisfies Meta<typeof Navigationbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = {

};
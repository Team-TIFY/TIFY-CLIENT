import { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '.';

// export default {
//   title: 'TextArea',
//   component: TextArea,
//   argTypes: {},
// } as Meta<typeof TextArea>;

const meta = {
  title: 'TextArea',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    variant: 'default',
    children: ''
  },
};

export const WithInstInput: Story = {
  args: {
    variant: 'withInst',
    children:'설명 문구'
  },
}

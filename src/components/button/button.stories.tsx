import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
};

export default meta;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
  },
};

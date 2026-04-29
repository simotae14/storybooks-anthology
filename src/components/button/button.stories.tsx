import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
    size: 'medium',
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'select',
      description: 'Text to display on the button',
      options: ['Button', 'Click Me', 'Submit', 'Cancel'],
      // table: {
      //   disable: true,
      // },
    },
    size: {
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
    },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'large',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

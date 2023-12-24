import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    label: { control: "text" },
    onClick: { action: "onClick" }, // Simulate click events
    className: { control: "text" },
    icon: { control: { type: "select", options: ["none", "search", "user"] } },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};
export const CustomContent: Story = {
  args: {
    label: "Button",
    children: "Custom content",
  },
};

export const Icon: Story = {
  args: {
    label: "Button",
    icon: "icon",
  },
};

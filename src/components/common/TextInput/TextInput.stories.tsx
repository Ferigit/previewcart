import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Uncontrolled: Story = {
  decorators: [
    (Story, ctx) => {
      type FormValues = {
        name: string;
      };

      const { handleSubmit, register } = useForm<FormValues>();
      const onSubmit = (data: FormValues) => console.log(data);

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Story
            args={{
              ...ctx.args,
              register,
            }}
          />
          <input
            type="submit"
            className="bg-blue-400 rounded-lg px-2 py-2 text-white"
          />
        </form>
      );
    },
  ],
  args: {
    label: "Name",
    name: "name",
    id: "name",
    type: "text",
    placeholder: "Enter name",
  },
};
export const Controlled: Story = {
  decorators: [
    (Story, ctx) => {
      const [value, setValue] = useState("");

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value);

      return (
        <Story
          args={{
            ...ctx.args,
            customControl: { value, onChange: handleChange },
          }}
        />
      );
    },
  ],
  args: {
    label: "Name",
    name: "name",
    type: "text",
    id: "name",
    placeholder: "Enter name",
  },
};
export const Error: Story = {
    decorators: [
      (Story, ctx) => {
        const [value, setValue] = useState("");
  
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value);
  
        return (
          <Story
            args={{
              ...ctx.args,
              customControl: { value, onChange: handleChange },
              errors: { name: { message: "Name is required!" } },
            }}
          />
        );
      },
    ],
    args: {
      label: "Name",
      name: "name",
      type: "text",
      id: "name",
      placeholder: "Enter name",
    },
  };

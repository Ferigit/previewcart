/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import { expect } from "@storybook/test";
import { FieldErrors } from "@/src/types/form";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { TextInput } from "./index";

interface TestProps {
  id: string;
  name: string;
  label: string;
  type: "text" | "checkbox" | "radio" | "select" | "email" | "password";
  register?: UseFormRegister<any>;
  errors?: FieldErrors<FieldValues>;
  placeholder?: string;
  className?: {
    container?: string;
    input?: string;
  };
  customControl?: any; //TODO resolve any type
}

const setup = (testProps: TestProps) => {
  const utils = render(<TextInput {...testProps} />);
  const input: any = screen.getByLabelText(testProps.label);
  return {
    input,
    ...utils,
  };
};

it("It should render default props right", () => {
  const testProps: TestProps = {
    id: "name",
    name: "name",
    label: "Name",
    placeholder: "Enter name",
    type: "text",
  };
  const { input } = setup(testProps);
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("");
});

it("It should work for onChange value ", () => {
  const testProps: TestProps = {
    id: "name",
    name: "name",
    label: "Name",
    placeholder: "Enter name",
    type: "text",
  };
  const { input } = setup(testProps);
  fireEvent.change(input, { target: { value: "test name" } });
  expect(input?.value).toBe("test name");
});

it("It should work for errors ", () => {
  const testProps: TestProps = {
    id: "name",
    name: "name",
    label: "Name",
    placeholder: "Enter name",
    type: "text",
    errors: { name: { message: "Name is required!" } },
  };
  render(<TextInput {...testProps} />);
  const errorElement = screen.getByText("Name is required!");
  expect(errorElement).toBeInTheDocument();
});

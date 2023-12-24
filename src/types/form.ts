import { OptionalObjectSchema, TypeOfShape } from "yup/lib/object";
import { AnyObject } from "yup/lib/types";
import {
  UseFormRegister,
  FieldValues,
  Ref,
  DeepMap,
  MultipleFieldErrors,
  Message,
} from "react-hook-form";

export type FormSection = "cart";

export interface InputProps {
  type:
    | "text"
    | "number"
    | "radio"
    | "email"
    | "password"
    | "select"
    | "checkbox";
  name: string;
  id: string;
  value: string | number | boolean;
  placeholder?: string;
  label?: string;
  register?: UseFormRegister<any>;
  typeValue?: "boolean" | "number";
  validations?: Validation[];
  options?: Opt[];
  errors?: FieldErrors<FieldValues>;
  className?: {
    container?: string;
    input?: string;
  };
}

export interface Opt {
  value: string | number;
  desc: string;
}

export interface Validation {
  type: "required" | "isEmail" | "minLength" | "isTrue" | "oneOf";
  value?: string | number | boolean;
  message: string;
  ref?: string;
}

export type SchemaForm = OptionalObjectSchema<
  {
    [x: string]: any;
  },
  AnyObject,
  TypeOfShape<{
    [x: string]: any;
  }>
>;
interface CustomInputOptions extends InputProps {
  customControl?: {
    onChange?: (value: any) => void;
    onBlur?: () => void;
    value?: string | string [];
    type?: string;
  };
}
export type CustomInputProps = Omit<
  CustomInputOptions,
  "validations" | "typeValue" | "value"
>;
export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};
export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;

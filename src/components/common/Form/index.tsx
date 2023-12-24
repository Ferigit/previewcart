//Dynamic form component that gets json data and renders the corresponding inputs
import clsx from "classnames";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomSelect, TextInput } from "@/src/components/common";
import { Button } from "@/src/components/common";
import { InputProps, SchemaForm } from "@/src/types/form";

interface IProps {
  onSubmit: (data: unknown) => void;
  labelButtonSubmit?: string;
  titleForm?: string;
  initialValues: unknown;
  validationSchema: SchemaForm;
  inputs: InputProps[];
  className?: {
    container?: string;
  };
}

export const Form = ({ ...props }: IProps) => {
  const {
    initialValues,
    inputs,
    onSubmit,
    validationSchema,
    titleForm,
    labelButtonSubmit = "Submit",
    className,
  } = props;

  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { ...(initialValues as any) },
  });
  //TODO complete this part and all input types
  const createInputs = () =>
    inputs.map(({ validations, typeValue, value, ...inputProps }) => {
      switch (inputProps.type) {
        case "select":
          return <CustomSelect {...inputProps} key={inputProps.name} />;
        case "checkbox":
          return <div>Custom checkbox input </div>; //TODO add custom checkbox component
        case "radio":
          return <div>Custom radio input </div>; //TODO add custom radio component
        default:
          return <TextInput {...inputProps} key={inputProps.name} />;
      }
    });

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className={clsx(
          "bg-secondary rounded-md p-10 pt-5 shadow-2xl shadow-primary/30 flex flex-col gap-2 border border-primary w-full ",
          className?.container
        )}
      >
        {titleForm && (
          <h5 className="font-extrabold text-center text-2xl pb-2 mb-2 border-b border-white/50">
            {titleForm}
          </h5>
        )}

        <section className="flex-1 flex flex-col gap-3">
          {createInputs()}
        </section>
        <Button
          label={labelButtonSubmit}
          type="submit"
          className="bg-primary transition-opacity  w-full rounded-md py-2 hover:opacity-90 active:opacity-100 font-bold mt-4"
        />
      </form>
    </FormProvider>
  );
};

//TextInput component support Controlled and Uncontrolled variants inside form 
import { ErrorMessage } from "@/src/components/common/index";
import { CustomInputProps } from "@/src/types/form";
import clsx from "classnames";

export const TextInput = ({
  id,
  name,
  label,
  register,
  errors,
  className,
  customControl, //Based on this prop decide to be controlled or uncontrolled
  ...props
}: CustomInputProps) => {
  const error = errors?.[name]?.message as string | undefined;

  const inputId = id ?? `${name}-${props.type}-${label}`;

  return (
    <div
      className={clsx(
        "w-fit flex gap-1 flex-col min-h-20",
        className?.container
      )}
    >
      {label && (
        <label className="text-gray-400 text-sm" htmlFor={inputId}>
          {label}
        </label>
      )}

      <input
        id={id}
        data-testid="input-component"
        className={clsx(
          "py-1 px-2 rounded h-12 w-full text-black",
          className?.input,
          error ? "border-2 border-red-500" : "border-2 border-gray-400"
        )}
        {...(customControl
          ? { ...customControl }
          : register
          ? { ...register(name) }
          : {})}
        {...props}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

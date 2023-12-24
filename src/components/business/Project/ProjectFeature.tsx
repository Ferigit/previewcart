import React from "react";
import clsx from "classnames";

export const ProjectFeature = ({
  label = "",
  value = "",
  className,
}: {
  label: string;
  value: string | number | undefined;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "w-full text-gray-700 truncate justify-between md:flex items-center border-b border-b-gray-400 md:border-none",
        className
      )}
    >
      <p className="text-gray-800 font-medium ">{label} </p>
      <p className="text-gray-700 truncate"> {value}</p>
    </div>
  );
};

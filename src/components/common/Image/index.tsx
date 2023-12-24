import React from "react";
import Image from "next/image";
import clsx from "classnames";

interface ImageProps {
  src: string;
  alt: string;
  layout?: string;
  objectFit?: string;
  width?: string;
  height?: string;
  className?: {
    container?: string;
    img?: string;
  };
}

const DynamicImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
  className,
}) => {
  return (
    <div className={clsx("relative", className?.container)}>
      <Image
        src={src}
        alt={alt}
        className={clsx("relative", className?.img)}
        {...(width && height && { width: +width, height: +height })}
        {...(!(width && height) && layout && { layout, objectFit })}
      />
    </div>
  );
};
export default DynamicImage;

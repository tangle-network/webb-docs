import Image from "next/image";
import type { ComponentProps, FC } from "react";

const ThemedImage: FC<{
  lightImageProps: ComponentProps<typeof Image>;
  darkImageProps: ComponentProps<typeof Image>;
}> = ({ darkImageProps, lightImageProps }) => {
  return (
    <>
      <div className="block dark:hidden">
        <Image alt="light img" {...lightImageProps} />
      </div>
      <div className="hidden dark:block">
        <Image alt="dark img" {...darkImageProps} />
      </div>
    </>
  );
};

export default ThemedImage;

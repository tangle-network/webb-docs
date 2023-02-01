import Image from "next/image";
import TransferLight from "./transfer-light.png";

export const Transfer = (props) => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={TransferLight} height={props.height} alt="withdraw light" />
      </div>
      <div className="hidden dark:block">
        <Image src={TransferLight} height={props.height} alt="withdraw dark" />
      </div>
    </>
  );
};

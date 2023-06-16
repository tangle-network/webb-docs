import Image from "next/image";
import MASPPrivateTransferLight from "./masp_private_transfer_light.png";
import MASPPrivateTransferDark from "./masp_private_transfer_dark.png";
import MASPSwapLight from "./masp_swap_light.png";
import MASPSwapDark from "./masp_swap_dark.png";
import MASPSwapDiagramLight from "./masp_swap_diagram_light.png";
import MASPSwapDiagramDark from "./masp_swap_diagram_dark.png";

export const MASPPrivateTransferImage = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={MASPPrivateTransferLight} alt="masp light" />
      </div>
      <div className="hidden dark:block">
        <Image src={MASPPrivateTransferDark} alt="masp dark" />
      </div>
    </>
  );
};

export const MASPSwapImage = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={MASPSwapLight} alt="masp light" />
      </div>
      <div className="hidden dark:block">
        <Image src={MASPSwapDark} alt="masp dark" />
      </div>
    </>
  );
};

export const MASPSwapDiagramImage = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={MASPSwapDiagramLight} alt="masp light" />
      </div>
      <div className="hidden dark:block">
        <Image src={MASPSwapDiagramDark} alt="masp dark" />
      </div>
    </>
  );
};

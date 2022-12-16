import Image from "next/image";
import latexLight from "./latex_light.png";
import latexDark from "./latex_dark.png";

export default function AssetTransferImage(props) {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={latexLight} alt="Dkg light" />
      </div>
      <div className="hidden dark:block">
        <Image src={latexDark} alt="Dkg dark" />
      </div>
    </>
  );
}

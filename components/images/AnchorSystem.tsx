import Image from "next/image";
import AnchorLight from "./anchor_system_light.png";
import AnchorDark from "./anchor_system_dark.png";

export default function AnchorSystem(props) {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={AnchorLight} alt="Dkg light" />
      </div>
      <div className="hidden dark:block">
        <Image src={AnchorDark} alt="Dkg dark" />
      </div>
    </>
  );
}

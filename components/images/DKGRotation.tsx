import Image from "next/image";
import DKGRotationLight from "./dkg_rotation_light.png";
import DKGRotationDark from "./dkg_rotation_dark.png";

export default function DKGRotationImages(props) {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={DKGRotationLight} alt="Dkg Rotation light" />
      </div>
      <div className="hidden dark:block">
        <Image src={DKGRotationDark} alt="Dkg Rotation dark" />
      </div>
    </>
  );
}

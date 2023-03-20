import Image from "next/image";
import DKGRotation from "./dkg_rotation.png";

export default function DKGRotationImages(props) {
  return (
    <>
      <div className="block">
        <Image src={DKGRotation} alt="Dkg light" />
      </div>
    </>
  );
}

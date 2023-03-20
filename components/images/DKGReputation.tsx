import Image from "next/image";
import DKGReputation from "./dkg_reputation_calculcation.png";

export default function DkgReputationImages(props) {
  return (
    <>
      <div className="block">
        <Image src={DKGReputation} alt="Dkg light" />
      </div>
    </>
  );
}

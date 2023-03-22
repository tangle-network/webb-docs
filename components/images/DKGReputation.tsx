import Image from "next/image";
import DKGReputationLight from "./dkg_reputation_calculcation_light.png";
import DKGReputationDark from "./dkg_reputation_calculcation_dark.png";

export default function DkgReputationImages(props) {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={DKGReputationLight} alt="Dkg Reputation light" />
      </div>
      <div className="hidden dark:block">
        <Image src={DKGReputationDark} alt="Dkg Reputation dark" />
      </div>
    </>
  );
}

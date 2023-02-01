import Image from "next/image";
import AnchorRelayerLight from "./anchor_relayer_dkg_light.png";
import AnchorRelayerDark from "./anchor_relayer_dkg_dark.png";

export default function AnchorRelayerSystem(props) {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={AnchorRelayerLight} alt="Dkg light" />
      </div>
      <div className="hidden dark:block">
        <Image src={AnchorRelayerDark} alt="Dkg dark" />
      </div>
    </>
  );
}

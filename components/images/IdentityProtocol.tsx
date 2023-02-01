import Image from "next/image";
import IdentityDark from "./latex_identity_dark.png";
import IdentityLight from "./latex_identity_light.png";

export default function IdentityImages(props) {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={IdentityLight} alt="Dkg light" />
      </div>
      <div className="hidden dark:block">
        <Image src={IdentityDark} alt="Dkg dark" />
      </div>
    </>
  );
}

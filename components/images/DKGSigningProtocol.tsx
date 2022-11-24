import Image from 'next/image'
import DKGSigningLight from './dkg_signing_light.png';
import DKGSigningDark from './dkg_signing_dark.png';

export default function DKGSigningImages (props) {
  return (
    <>
    <div className="block dark:hidden">
      <Image src={DKGSigningLight} alt="Dkg light" fill />
    </div>
    <div className="hidden dark:block">
      <Image src={DKGSigningDark}alt="Dkg dark" fill />
    </div>
    </>
  )
};

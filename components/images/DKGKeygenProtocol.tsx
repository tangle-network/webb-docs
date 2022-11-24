import Image from 'next/image'
import DKGKeygenLight from './dkg_keygen_diagram_light.png';
import DKGKeygenDark from './dkg_keygen_diagram_dark.png';

export default function DKGKeygenImages (props) {
  return (
    <>
    <div className="block dark:hidden">
      <Image src={DKGKeygenLight} alt="Dkg light" fill />
    </div>
    <div className="hidden dark:block">
      <Image src={DKGKeygenDark}alt="Dkg dark" fill />
    </div>
    </>
  )
};

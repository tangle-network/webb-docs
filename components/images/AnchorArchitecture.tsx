import Image from 'next/image'
import AnchorArchitectureLight from './dkg_signing_light_diagram.png';
import AnchorArchitectureDark from './dkg_signing_dark_diagram.png';

export default function AnchorArchitecture (props) {
  return (
    <>
    <div className="block dark:hidden">
      <Image src={AnchorArchitectureLight} alt="Dkg light" fill />
    </div>
    <div className="hidden dark:block">
      <Image src={AnchorArchitectureDark}alt="Dkg dark" fill />
    </div>
    </>
  )
};

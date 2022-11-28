import Image from 'next/image'
import relayerLight from './relayer_light.png';
import relayerDark from './relayer_dark.png';

export default function RelayerImages (props) {
  return (
    <>
    <div className="block dark:hidden">
      <Image src={relayerLight} alt="Dkg light" fill />
    </div>
    <div className="hidden dark:block">
      <Image src={relayerDark}alt="Dkg dark" fill />
    </div>
    </>
  )
};

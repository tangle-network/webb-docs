import Image from "next/image";
import SequenceLight from "./proposal_sequence_light.png";
import SequenceDark from "./proposal_sequence_dark.png";

export default function DKGProposalImages(props) {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={SequenceLight} alt="Dkg light" />
      </div>
      <div className="hidden dark:block">
        <Image src={SequenceDark} alt="Dkg dark" />
      </div>
    </>
  );
}

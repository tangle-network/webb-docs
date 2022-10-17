import React from 'react'
import proposalSequenceLight from './proposal_sequence_diagram_light.png'
import proposalSequenceDark from './proposal_sequence_dark.png'

export default function DKGImages() {
  return (
    <>
      <img src={proposalSequenceLight} alt="Dkg light" className="img-light" />

      <img src={proposalSequenceDark} alt="Dkg dark" className="img-dark" />
    </>
  )
}

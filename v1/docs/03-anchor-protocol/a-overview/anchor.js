import React from 'react'
import anchor_protocol_dark from './anchor_protocol_dark.png'
import anchor_protocol_light from './anchor_protocol_light.png'

export default function AnchorImages() {
  return (
    <>
      <img src={anchor_protocol_light} alt="Dkg light" className="img-light" />

      <img src={anchor_protocol_dark} alt="Dkg dark" className="img-dark" />
    </>
  )
}

import React from 'react'
import anchor_system_dark from './anchor_system_dark.png'
import anchor_system_light from './anchor_system_light.png'

export default function AnchorImages() {
  return (
    <>
      <img src={anchor_system_light} alt="Dkg light" className="img-light" />

      <img src={anchor_system_dark} alt="Dkg dark" className="img-dark" />
    </>
  )
}

import React from 'react'
import anchor_dkg_relayer_light from './anchor_dkg_relayer_light.png'
import anchor_dkg_relayer_dark from './anchor_relayer_dkg_dark.png'

export default function AnchorImages() {
  return (
    <>
      <img
        src={anchor_dkg_relayer_light}
        alt="Dkg light"
        className="img-light"
      />

      <img src={anchor_dkg_relayer_dark} alt="Dkg dark" className="img-dark" />
    </>
  )
}

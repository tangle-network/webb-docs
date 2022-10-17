import React from 'react'
import dkg_keygen_light from './dkg_keygen_diagram_light.png'
import dkg_keygen_dark from './dkg_keygen_diagram_dark.png'

export default function DKGKeygen_Images() {
  return (
    <>
      <img src={dkg_keygen_light} alt="Dkg light" className="img-light" />

      <img src={dkg_keygen_dark} alt="Dkg dark" className="img-dark" />
    </>
  )
}

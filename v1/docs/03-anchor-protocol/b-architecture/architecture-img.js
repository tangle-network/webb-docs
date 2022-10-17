import React from 'react'
import dkg_signing_light_diagram from './dkg_signing_light_diagram.png'
import dkg_signing_dark_diagram from './dkg_signing_dark_diagram.png'

export default function DKGImages() {
  return (
    <>
      <img
        src={dkg_signing_light_diagram}
        alt="Dkg light"
        className="img-light"
      />

      <img src={dkg_signing_dark_diagram} alt="Dkg dark" className="img-dark" />
    </>
  )
}

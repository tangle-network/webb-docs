import React from 'react'
import dkg_signing_light from './dkg_signing_light.png'
import dkg_signing_dark from './dkg_signing_dark.png'

export default function DKGSignature_Images() {
  return (
    <>
      <img src={dkg_signing_light} alt="Dkg light" className="img-light" />

      <img src={dkg_signing_dark} alt="Dkg dark" className="img-dark" />
    </>
  )
}

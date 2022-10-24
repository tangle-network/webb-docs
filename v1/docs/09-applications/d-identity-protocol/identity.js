import React from 'react'
import latex_light from './latex_identity_light.png'
import latex_dark from './latex_identity_dark.png'

export default function IdentityImages() {
  return (
    <>
      <img src={latex_light} alt="Dkg light" className="img-light" />

      <img src={latex_dark} alt="Dkg dark" className="img-dark" />
    </>
  )
}

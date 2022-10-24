import React from 'react'
import latex_light from './latex_light.png'
import latex_dark from './latex_dark.png'

export default function DKGKeygen_Images() {
  return (
    <>
      <img src={latex_light} alt="Dkg light" className="img-light" />

      <img src={latex_dark} alt="Dkg dark" className="img-dark" />
    </>
  )
}

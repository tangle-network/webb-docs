import React from 'react'
import relayer_light from './relayer_light.png'
import relayer_dark from './relayer_dark.png'

export default function AnchorImages() {
  return (
    <>
      <img src={relayer_light} alt="Dkg light" className="img-light" />

      <img src={relayer_dark} alt="Dkg dark" className="img-dark" />
    </>
  )
}

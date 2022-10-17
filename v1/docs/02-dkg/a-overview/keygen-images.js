import React from 'react'
import dkg1Light from './dkg1-light.png'
import dkg1Dark from './dkg1.png'

export default function DKGImages() {
  return (
    <>
      <img src={dkg1Light} alt="Dkg light" className="img-light" />

      <img src={dkg1Dark} alt="Dkg dark" className="img-dark" />
    </>
  )
}

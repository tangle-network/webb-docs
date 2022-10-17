import React from 'react'
import signingLight from './signing-light.png'
import signingDark from './signing.png'

export default function DKGImages() {
  return (
    <>
      <img src={signingLight} className="img-light" />

      <img src={signingDark} className="img-dark" />
    </>
  )
}

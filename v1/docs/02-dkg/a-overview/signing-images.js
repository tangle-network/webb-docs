import React, { useContext } from 'react'
import signingDark from './dkg1.png';
import signingLight from './signing-light.png';
import { ThemeContext } from '../../../../src/contexts/ThemeContext.tsx'

export default function DKGImages() {
  const { colorMode, setColorMode } = useContext(ThemeContext)
  
  return (
    <>
     {colorMode === 'light' ? (
        <img src={signingLight} />) : (
        <img src={signingDark} />
     )}
     </>
  )
}

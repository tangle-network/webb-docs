import React, { useContext } from 'react'
import dkg1Dark from './dkg1.png';
import dkg1Light from './dkg1-light.png';
import { ThemeContext } from '../../../../src/contexts/ThemeContext.tsx'

export default function DKGImages() {
  const { colorMode, setColorMode } = useContext(ThemeContext)
  
  return (
    <>
     {colorMode === 'light' ? (
        <img src={dkg1Light} />) : (
        <img src={dkg1Dark} />
     )}
     </>
  )
}

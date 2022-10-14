import React, { useContext } from 'react'
import darkImg from './anchor-img-dark.png'
import lightImg from './anchor-img-light.png'
import { ThemeContext } from '../../../../src/contexts/ThemeContext.tsx'

export default function AnchorDKGImages() {
  const { colorMode, setColorMode } = useContext(ThemeContext)

  return (
    <>
      {colorMode === 'light' ? <img src={lightImg} /> : <img src={darkImg} />}
    </>
  )
}

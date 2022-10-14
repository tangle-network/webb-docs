import React, { useContext } from 'react'
import darkImg from './dark-img.png'
import lightImg from './light-img.png'
import { ThemeContext } from '../../../../src/contexts/ThemeContext.tsx'

export default function DKGImages() {
  const { colorMode, setColorMode } = useContext(ThemeContext)

  return (
    <>
      {colorMode === 'light' ? <img src={lightImg} /> : <img src={darkImg} />}
    </>
  )
}

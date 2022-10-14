import React, { useContext } from 'react'
import darkImg from './relayer-dark.png'
import lightImg from './relayer-light.png'
import { ThemeContext } from '../../../../src/contexts/ThemeContext.tsx'

export default function RelayerImages() {
  const { colorMode, setColorMode } = useContext(ThemeContext)

  return (
    <>
      {colorMode === 'light' ? <img src={lightImg} /> : <img src={darkImg} />}
    </>
  )
}

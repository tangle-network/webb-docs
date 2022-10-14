import React, { useContext } from 'react'
import anchorLight from './anchor-light.png'
import anchorDark from './anchor-dark.png'
import { ThemeContext } from '../../../../src/contexts/ThemeContext.tsx'

export default function AnchorImages() {
  const { colorMode, setColorMode } = useContext(ThemeContext)

  return (
    <>
      {colorMode === 'light' ? (
        <img src={anchorLight} margin="5px" />
      ) : (
        <img src={anchorDark} margin="5px" />
      )}
    </>
  )
}

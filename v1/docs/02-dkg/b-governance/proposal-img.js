import React, { useContext } from 'react'
import proposalsLight from './light-proposals.png'
import proposalsDark from './dark-proposals.png'
import { ThemeContext } from '../../../../src/contexts/ThemeContext.tsx'

export default function DKGImages() {
  const { colorMode, setColorMode } = useContext(ThemeContext)

  return (
    <>
      {colorMode === 'light' ? (
        <img src={proposalsLight} />
      ) : (
        <img src={proposalsDark} />
      )}
    </>
  )
}

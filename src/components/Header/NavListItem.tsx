import React, { useState, useEffect } from 'react'
import Link from '../Link'

interface NavListItemProps {
  external: boolean
  link: string
  title: string
}

export default function NavListItem({ link, title }: NavListItemProps) {
  const [isCurrent, setIsCurrent] = useState(false)
  const styles =
    'whitespace-nowrap pl-6 pr-12 py-2 focus:outline-none focus:bg-substrateBlueBg hover:text-substrateGreen hover:underline dark:text-white font-medium'
  useEffect(() => {
    if (
      link === location.pathname ||
      (location.pathname === '/v1/getting-started/overview' &&
        title === 'Docs')
    ) {
      setIsCurrent(true)
    }
  }, [])
  return (
    <Link to={link}>
      <div
        className={`${styles} ${
          isCurrent
            ? 'text-substrateGreen underline'
            : 'text-substrateDark dark:text-white'
        }`}
      >
        <span>{title}</span>
      </div>
    </Link>
  )
}

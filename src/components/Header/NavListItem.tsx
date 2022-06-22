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
    'whitespace-nowrap pl-6 pr-12 py-2 focus:outline-none focus:bg-webbBlueBg hover:text-webbBlue hover:underline dark:text-white font-medium'
  useEffect(() => {
    if (
      link === location.pathname ||
      (location.pathname === '/v1/getting-started/overview' &&
        title === 'Docs') ||
      (location.pathname.includes('how-to-guides') &&
        title === 'How-to Guides')
    ) {
      setIsCurrent(true)
    }
  }, [])
  return (
    <Link to={link}>
      <div
        className={`${styles} ${
          isCurrent
            ? 'text-webbBlue underline'
            : 'text-webbDark dark:text-white'
        }`}
      >
        <span>{title}</span>
      </div>
    </Link>
  )
}

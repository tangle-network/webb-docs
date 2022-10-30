import React from 'react'
import Link from '../Link'

interface NextButtonProps {
  text: string
  link: string
}
export function NextButton({ text, link }: NextButtonProps) {
  return (
    <>
      <Link to={link}>
        <div className="md-button group inline-block my-6">
          <div className="flex items-center justify-center w-80 h-14 rounded bg-darkBackground border-white transform transition duration-300 ease-in-out group-hover:bg-webbSecondary dark:group-hover:bg-webbSecondary border-2 border-transparent hover:opacity-80">
            <button className="truncate text-lg text-white dark:text-white px-4 group-hover:text-white font-bold focus:outline-none">
              Next - {text}
            </button>
          </div>
        </div>
      </Link>
    </>
  )
}

import React from 'react'
import Link from '../Link'

interface SecondaryButtonProps {
  link: string
  children: React.ReactNode
  external?: boolean
  cta?: boolean
}
export function SecondaryButton(props: SecondaryButtonProps) {
  const paddingSize = () => (props.cta ? `py-4 px-8` : `py-2 px-5`)
  const textSize = () => (props.cta ? `text-xl` : `text-lg`)
  return (
    <>
      {props.external ? (
        <a href={props.link} target="_blank" rel="noreferrer">
          <div
            className={`bg-webbDarkest dark:bg-webbDarkest border-white ${paddingSize()} ${textSize()} inline-block rounded-md transform transition duration-300 ease-in-out group-hover:bg-webbSecondary dark:group-hover:bg-webbSecondary border-2 border-transparent hover:opacity-80`}
          >
            <div className="font-bold mb-0 dark:text-white text-webbWhite">
              {props.children}
            </div>
          </div>
        </a>
      ) : (
        <Link to={props.link}>
          <div
            className={`bg-webbDarkest dark:bg-webbDarkest ${paddingSize()} ${textSize()} inline-block rounded-md hover:opacity-80 transition-opacity`}
          >
            <div className="font-bold mb-0 dark:text-white text-webbWhite">
              {props.children}
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

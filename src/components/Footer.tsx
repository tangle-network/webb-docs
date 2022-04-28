import React, { Fragment } from 'react'
import MainNav from './MainNav'
import Link from './Link'
import Icon from './Icon'
import { useSiteMetadata } from './Hooks/use-site-metadata'

export default function Footer() {
  const { siteMetadata } = useSiteMetadata()
  const navItems = MainNav.global()

  return (
    <footer className="w-full px-4 xl:px-12 bg-substrateDark text-white font-body">
      <div className="h-auto pb-6 md:flex md:flex-row-reverse md:justify-between md:items-center">
        <div className="flex items-center py-4">
          <a
            className="mr-11 md:mr-0 md:ml-9 transform transition-all duration-300 ease-in-out hover:opacity-50"
            href={siteMetadata.discord}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              name="discordOrg"
              className="fill-current text-substrateWhite"
            />
          </a>
          <a
            className="mr-11 md:mr-0 md:ml-9 transform transition-all duration-300 ease-in-out hover:opacity-50"
            href={siteMetadata.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              name="github"
              className="h-6 w-6 fill-current text-substrateWhite"
            />
          </a>
          <a
            className="mr-11 md:mr-0 md:ml-9 transform transition-all duration-300 ease-in-out hover:opacity-50"
            href={siteMetadata.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              name="twitter"
              className="h-6 w-6 fill-current text-substrateWhite"
            />
          </a>
        </div>
        <div className="underline-anchor inline-flex flex-col md:flex-row py-6 text-[#DFE3EA] text-xs font-light">
          <div className="mb-4 md:mb-0 md:pr-8 inline-block">
            © {new Date().getFullYear()} Webb Technologies{` `}All Rights
            Reserved{` `}
          </div>
          {/* <div className="mb-4 md:mb-0 md:mr-8 inline-block">
            <a
              className="block cursor-pointer"
              href={siteMetadata.privacy}
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </div>

          <div className="mb-4 md:mb-0 md:mr-8 inline-block">
            <a
              className="block cursor-pointer"
              href={siteMetadata.terms}
              target="_blank"
              rel="noreferrer"
            >
              Terms of Services
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

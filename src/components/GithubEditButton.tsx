import React, { useState, useEffect } from 'react'
import Icon from '../components/Icon'

interface GithuEditButtonProps {
  absolutePath: string
}
export default function GithubEditButton(props: GithuEditButtonProps) {
  const githubSlug = 'https://github.com/webb-tools/webb-docs/edit/main'

  const [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(
      `${githubSlug}${props.absolutePath.substr(
        props.absolutePath.indexOf('/v')
      )}`
    )
  }, [])

  return (
    <div className="hidden lg:block lg:pl-2">
      <a
        className="text-sm font-medium text-webbDark dark:text-white hover:underline lg:flex lg:items-center "
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        |{` `}
        <Icon
          name="github"
          className="mx-2 fill-current text-webbDark dark:text-white"
        />
        {` `}
        <span className="text-webbDark dark:text-white">Edit</span>
      </a>
    </div>
  )
}

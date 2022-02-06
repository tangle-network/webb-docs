/* read the `.env.*` files, gatsby builtin */
// eslint-disable-next-line
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Webb Docs',
    siteUrl: `${process.env.GATSBY_DOCS_URL || 'https://docs.web.tools'}`,
    // TODO: replace substrate img with webb
    image_og: `${process.env.GATSBY_DOCS_URL}/img/webb-icon.png`,
    description:
      'Webb is an ecosystem of privacy protocols and products for a multi-chain world.',
    keywords: [
      'Blockchain',
      'Privacy',
      'Zero-knowledge',
      'Webb Technologies',
      'Cross-chain',
      'Bridging',
      'Polkadot',
      'Web3.0',
      'Technology',
      'Decentralization',
      'Build',
    ],
    author: 'Webb Technologies Team',
    // TODO: add webb info email
    pressEmail: '',
    // TODO: add webb info email
    email: 'drew@webb.tools',
    twitter: 'https://twitter.com/webbprotocol',
    // linkedIn: '',
    discord: 'https://discord.com/invite/cv8EfJu3Tn',
    github: 'https://github.com/webb-tools',
    telegram: 'https://t.me/webbprotocol',
    // gitter: '',
    // stackOverflow: '',
    // privacy: '',
    // terms: '',
    // youtube: '',
    // crowdcast: '',
    webburl: `${process.env.GATSBY_IO_URL}`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    // SOURCE FOLDERS FOR DOCUMENTATIONS
    //*********************************//
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v1/docs`,
        name: `docs`,
      },
    },
    //*********************************//
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/svgs/`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeLinkHeaders: false,
        mergeCachingHeaders: false,
      },
    },
    `gatsby-plugin-meta-redirect`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 100,
          breakpoints: [640, 768, 1024, 1280],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg className="fill-current text-substrateDark dark:text-white" aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              maintainCase: false,
              removeAccents: false,
              isIconAfterHeader: false,
              elements: [`h2`, `h3`],
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.tsx`),
        },
      },
    },

    /* transformer for markdown files */
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },

    /* source file system for content dir */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./content/`,
      },
    },

    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        options: {
          emitWarning: false,
          failOnError: false,
        },
      },
    },

    'gatsby-plugin-postcss',

    /* use tailwindcss, used sass instead of css */
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          /* Load custom Tailwind CSS configuration, used to purge
             "unused" tailwind classes */
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Webb Documentation`,
        short_name: `Webb Docs`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#26E0A2`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },

    /* removing registered legacy worker from gatsby-plugin-offline */
    'gatsby-plugin-remove-serviceworker',

    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        // TODO: add webb api domain for analyics
        domain: '',
        eventsGlobal: 'sa',
        events: true,
        trackPageViews: true,
      },
    },
    {
      resolve: `gatsby-plugin-force-trailing-slashes`,
      options: {
        excludedPaths: [`/404.html`],
      },
    },
  ],
}

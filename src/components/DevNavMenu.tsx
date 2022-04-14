const DevNavMenu = {
  global: () => {
    return [
      {
        section: `Docs`,
        url: '/v1',
        external: false,
      },
    ]
  },
  knowledgebase: () => {
    return [
      {
        name: 'Getting Started',
        items: [
          {
            title: 'Overview',
            link: '/v1/getting-started/overview/',
          },
          {
            title: 'Privacy Manifesto',
            link: '/v1/getting-started/privacy-manifesto/',
          },
          {
            title: 'Network Overview',
            link: '/v1/getting-started/network-overview/',
          },
          // {
          //   title: 'Technical Roadmap',
          //   link: '/v1/getting-started/technical-roadmap/',
          // },
          {
            title: 'Glossary',
            link: '/v1/getting-started/glossary/',
          },
        ],
      },
      {
        name: 'DKG',
        items: [
          {
            title: 'Overview',
            link: '/v1/dkg/overview/',
          },
          {
            title: 'Governance Protocol',
            link: '/v1/dkg/governance/',
          },
          {
            title: 'Installation',
            link: '/v1/dkg/usage/',
          },
        ],
      },
      {
        name: 'Anchor Protocol',
        items: [
          {
            title: 'Overview',
            link: '/v1/anchor-protocol/overview/',
          },
          {
            title: 'Architecture',
            link: '/v1/anchor-protocol/architecture/',
          },
          // {
          //   title: 'Governance',
          //   link: '/v1/bridge-protocol/governance/',
          // },
          // {
          //   title: 'Installation',
          //   link: '/v1/bridge-protocol/installation/',
          // },
          // {
          //   title: 'Usage',
          //   link: '/v1/bridge-protocol/usage/',
          // },
          // {
          //   title: 'Technical Roadmap',
          //   link: '/v1/bridge-protocol/technical-roadmap/',
          // },
          // {
          //   title: 'Deployments',
          //   link: '/v1/bridge-protocol/deployments/',
          // },
        ],
      },
      {
        name: 'Relayer',
        items: [
          {
            title: 'Overview',
            link: '/v1/relayer/overview/',
          },
          {
            title: 'Installation',
            link: '/v1/relayer/installation/',
          },
          {
            title: 'Usage',
            link: '/v1/relayer/usage',
          },
        ],
      },
      {
        name: 'Interoperable Shielded Pool Protocol',
        items: [
          {
            title: 'Overview',
            link: '/v1/ispp/overview/',
          },
        ],
      },
      // {
      //   name: 'Advanced',
      //   items: [
      //     {
      //       title: 'Cryptography',
      //       link: '/v1/advanced/cryptography/',
      //     },
      //     {
      //       title: 'Research Topics',
      //       link: '/v1/advanced/research/',
      //     },
      //   ],
      // },
      // {
      //   name: 'Basics',
      //   items: [
      //     {
      //       title: 'FAQ',
      //       link: '/v1/basics/faq/',
      //     },
      //   ],
      // },
    ]
  },
}

export { DevNavMenu }

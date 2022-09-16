const DevNavMenu = {
  global: () => {
    return [
      {
        section: `Docs`,
        url: '/v1/',
        external: false,
      },
      {
        section: 'How-to Guides',
        url: '/how-to-guides/',
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
          {
            title: 'Signature Bridge',
            link: '/v1/anchor-protocol/signature-bridge/',
          },
        ],
      },
      {
        name: 'Applications',
        items: [
          {
            title: 'Overview',
            link: '/v1/applications/overview/',
          },
          {
            title: 'Proposals',
            link: '/v1/applications/proposals/',
          },
          {
            title: 'Asset Protocol',
            link: '/v1/applications/asset-protocol/',
          },
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
            title: 'How to become a relayer',
            link: '/v1/relayer/how-to-become-a-relayer/',
          },
          {
            title: 'Private Transaction Relaying',
            link: '/v1/relayer/private-relaying/',
          },
          {
            title: 'Signature Relaying',
            link: '/v1/relayer/signature-relaying/',
          },
          {
            title: 'Data Querying',
            link: '/v1/relayer/data-querying/',
          },
          {
            title: 'Cloud Setup',
            link: '/v1/relayer/cloud-setup/',
          },
          {
            title: 'Relayer Roadmap',
            link: '/v1/relayer/roadmap/',
          },
        ],
      },
      {
        name: 'Tangle Network',
        items: [
          {
            title: 'How to run a node on Tangle Network',
            link: '/v1/node-operators/run-tangle-node/',
          },
          {
            title: 'Required Keys Setup',
            link: '/v1/node-operators/required-keys/',
          },
          {
            title: 'Payouts Overview',
            link: '/v1/node-operators/payouts/',
          },
          {
            title: 'Using systemd for Tangle node',
            link: '/v1/node-operators/systemd/',
          },
          {
            title: 'Secure node',
            link: '/v1/node-operators/secure-node/',
          },
          {
            title: 'Monitor your node',
            link: '/v1/node-operators/monitor-node/',
          },
        ],
      },
      {
        name: 'Crowdloan',
        items: [
          {
            title: 'Crowdloan Event',
            link: '/v1/crowdloan/overview/',
          },
          // TODO: Will add back pages after crowdloan campaign
          // {
          //   title: 'Crowdloan Rewards',
          //   link: '/v1/crowdloan/rewards/',
          // },
          {
            title: 'Contribute to Crowdloan',
            link: '/v1/crowdloan/contribute/',
          },
          // {
          //   title: 'FAQ',
          //   link: '/v1/crowdloan/faq/',
          // },
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
  htg: () => {
    return [
      // 1. Substrate Mixer.
      {
        name: 'Substrate Mixer',
        items: [
          {
            title: 'Running Substrate Mixer Locally',
            link: '/how-to-guides/v1/substrate-mixer/local-mixer/',
          },
        ],
      },
      // 2. EVM bridge.
      {
        name: 'EVM Bridge',
        items: [
          {
            title: 'Running EVM Bridge Locally',
            link: '/how-to-guides/v1/evm-bridge/local-bridge/',
          },
        ],
      },
      // 3. Node Setup
      {
        name: 'Node Setup',
        items: [
          {
            title: 'Setting up a DKG node',
            link: '/how-to-guides/v1/node-setup/dkg-node/',
          },
          {
            title: 'Configuring an SSL certificate',
            link: '/how-to-guides/v1/node-setup/ssl/',
          },
          {
            title: 'Monitoring a DKG node',
            link: '/how-to-guides/v1/node-setup/monitoring/',
          },
        ],
      },
    ]
  },
}

export { DevNavMenu }

const redirects = [
  {
    fromPath: '/how-to-guides/',
    toPath: `/how-to-guides/v1/`,
  },
  {
    fromPath: '/',
    toPath: '/v1/getting-started/overview/',
  },
  {
    fromPath: '/v1/',
    toPath: '/v1/getting-started/overview/',
  },
  {
    fromPath: '/v1/getting-started/',
    toPath: '/v1/getting-started/overview/',
  },
  {
    fromPath: '/v1/anchor-protocol/',
    toPath: '/v1/anchor-protocol/overview/',
  },
  {
    fromPath: '/v1/relayer/',
    toPath: '/v1/relayer/overview/',
  },
  {
    fromPath: '/v1/dkg/',
    toPath: '/v1/dkg/overview/',
  },
  {
    fromPath: '/v1/ispp/',
    toPath: '/v1/ispp/overview/',
  },
  // {
  //   fromPath: '/v1/advanced/',
  //   toPath: `/v1/advanced/cryptography/`,
  // },
  {
    fromPath: '/how-to-guides/substrate-mixer/',
    toPath: `/how-to-guides/v1/substrate-mixer/local-mixer/`,
  },
]

module.exports = {
  redirects,
}

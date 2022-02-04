const redirects = [
  {
    fromPath: '/v1/',
    toPath: '/v1/getting-started/overview/',
  },
  {
    fromPath: '/v1/getting-started/',
    toPath: '/v1/getting-started/overview/',
  },
  {
    fromPath: '/v1/bridge-protocol/',
    toPath: '/v1/bridge-protocol/overview/',
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
  {
    fromPath: '/v1/advanced/',
    toPath: `/v1/advanced/cryptography/`,
  },
  {
    fromPath: '/v1/basics/',
    toPath: `/v1/basics/faq/`,
  },
]

module.exports = {
  redirects,
}

import { Web3Provider } from '@ethersproject/providers'
const POLLING_INTERVAL = 12000

// export default function getLibrary (provider: any): ethers.providers.Web3Provider {
//   console.log('getLibrary==', provider)
//   const library = new ethers.providers.Web3Provider(provider)
//   library.pollingInterval = POLLING_INTERVAL
//   return library
// }

export default function getLibrary(provider: any): Web3Provider {
  console.log('provider==', provider)
  const library = new Web3Provider(provider)
  library.pollingInterval = POLLING_INTERVAL
  return library
}

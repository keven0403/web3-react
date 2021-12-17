import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

enum SupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  ARBITRUM_KOVAN = 144545313136048,
  ARBITRUM_ONE = 42161,
  POLYGON = 137
}

const NETWORK_URLS: {
  [chainId in SupportedChainId]: string
} = {
  [SupportedChainId.MAINNET]: `https://mainnet.infura.io/`,
  [SupportedChainId.RINKEBY]: `https://rinkeby.infura.io/`,
  [SupportedChainId.ROPSTEN]: `https://ropsten.infura.io/`,
  [SupportedChainId.GOERLI]: `https://goerli.infura.io/`,
  [SupportedChainId.KOVAN]: `https://kovan.infura.io/`,
  [SupportedChainId.ARBITRUM_KOVAN]: `https://kovan5.arbitrum.io/rpc`,
  [SupportedChainId.ARBITRUM_ONE]: `https://arb1.arbitrum.io/rpc`,
  [SupportedChainId.POLYGON]: `https://polygon-rpc.com/`
}

const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  SupportedChainId.MAINNET,
  SupportedChainId.KOVAN,
  SupportedChainId.GOERLI,
  SupportedChainId.RINKEBY,
  SupportedChainId.ROPSTEN,
  SupportedChainId.ARBITRUM_KOVAN,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.POLYGON
]

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
})


export const walletconnect = new WalletConnectConnector({
  rpc: NETWORK_URLS,
  qrcode: true,
  supportedChainIds: SUPPORTED_CHAIN_IDS,
  bridge: '',
})

export const connectorsByName:any = { 
  'Injected': injected,
  'WalletConnect': walletconnect
}
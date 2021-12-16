import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { RPC_URL, CHAINID } from 'constants/index'


export const injected = new InjectedConnector({ 
  supportedChainIds: [1, 3, 4, 5, 42, 137]
})

export const walletconnect = new WalletConnectConnector({
  rpc: { [CHAINID]: RPC_URL },
  qrcode: true
})

export const connectorsByName:any = { 
  'Injected': injected,
  'WalletConnect': walletconnect
}
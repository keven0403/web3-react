import { ethers } from 'ethers'
import { RPC_URL } from 'constants/index'

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

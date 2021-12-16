import styled from "styled-components"
import { FormattedMessage } from 'react-intl'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { useRef } from "react"
import ConectWalletModal from "../Modal/ConectWalletModal"

const SwitchWalletBox = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ff007a;
    cursor: pointer;
    border-radius: 3px;
    height: 30px;
    padding: 0 10px;
    margin: 0 10px;
    background: #F6DDE8;
    color: #ff007a;
`

const SwitchWallet = () => {
    const conectWalletModalRef:any = useRef()
    const useWeb3ReactContext = useWeb3React<Web3Provider>()
    const { account } = useWeb3ReactContext

    const connectWalletClick = () => {
        console.log('connectWalletClick')
        conectWalletModalRef.current.updateData({visible: true})
    }

    return (
        <div>
            <SwitchWalletBox onClick={connectWalletClick}>
                {
                    account ?
                    <span>{account}</span>
                    :
                    <FormattedMessage id="header.connectwallet" defaultMessage="" values={{name: ''}} />
                }
            </SwitchWalletBox>
            
            <ConectWalletModal onRef={conectWalletModalRef} />
        </div>
        
    )
}
export default SwitchWallet
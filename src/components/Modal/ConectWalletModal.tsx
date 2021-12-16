import styled from "styled-components"
import { Modal } from "antd"
import { useImperativeHandle, useState, useEffect } from "react"
import { SUPPORTED_WALLETS } from "constants/wallet"
import { connectorsByName } from 'connectors/NetworkConnector'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { FormattedMessage } from 'react-intl'
import { useEagerConnect, useInactiveListener } from 'hooks/triedEager'

const ConectWalletModalBox = styled.div`
    box-sizing: border-box;
`

const WalletItem = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #CED0F7;
    margin-bottom: 20px;
    border-radius: 5px;
    background: #EDEEF2;
    &:hover {
        border: 1px solid red;
    }
    img {
        height: 30px;
    }
    .item {
        flex: 1;
        padding: 20px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .disconnect {
        justify-content: center;
        background: red;
        color: #fff;
    }
`

const ItemName = styled.div`
    color: #000000;
    font-size: 16px;
    font-weight: 500;
`

const ConectWalletModal = (props:any) => {
    const useWeb3ReactContext = useWeb3React<Web3Provider>()
    const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3ReactContext
    const ethereum = (window as any).ethereum
    const [visible, setVisible] = useState(props.visible)
    const [walletOprions, setWalletOprions] = useState<any[]>([])
    const [activatingConnector, setActivatingConnector] = useState<any>()
    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect()
    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector)

    console.log('connector==', connector)
    console.log('library==', library)
    console.log(`chainId==${chainId}, account==${account}, active==${active}`)

    if (connector === connectorsByName['WalletConnect']) {
        console.log('WalletConnect fasfasdfsadfasdfasdfasdfasdf')
    }

    useEffect(() => {
        console.log('进来了')
        initData()
        initConnector()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useImperativeHandle(props.onRef, () => ({
        // onChild 就是暴露给父组件的方法
        updateData ({visible = false}) {
            setVisible(visible)
        }
    }))

    const initData = () => {
        let options:Array<any> = []
        if (typeof ethereum !== 'undefined') {
            console.log('MetaMask is installed!')
            SUPPORTED_WALLETS.forEach((item: any) => {
                options.push(item)
            })
        } else {
            console.log('MetaMask not installed!')
            SUPPORTED_WALLETS.forEach((item: any) => {
                if (item.name === 'MetaMask') {
                    item.link = 'https://metamask.io/'
                    item.name = 'Install Metamask'
                }
                options.push(item)
            })
        }
        setWalletOprions(options)
    }

    const initConnector = () => {
        // console.log(`chainId==${chainId}, account==${account}, activate==${activate}, active==${active}`)
        // console.log('initConnector activatingConnector=====', activatingConnector)
        // if (activatingConnector && activatingConnector === connector) {
        //     setActivatingConnector(undefined)
        // } else {
        //     const currentConnector = connectorsByName[name]
        //     const activating = currentConnector === activatingConnector
        //     const connected = currentConnector === connector
        //     const disabled = !triedEager || !!activatingConnector || connected || !!error
        //     setActivatingConnector(currentConnector)
        //     activate(currentConnector)
        // }
    }

    const handleOk = () => {
        setVisible(false)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const selectWalletItemClick = (item: any) => {
        let name:string = item.name
        const currentConnector = connectorsByName[name]
        setActivatingConnector(currentConnector)
        activate(currentConnector)
        setVisible(false)
    }

    const deactivateClick = () => {
        deactivate()
        setVisible(false)
    }

    return (
        <Modal
            title="Select the wallet"
            visible={visible}
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={null}
        >
            <ConectWalletModalBox>
                {
                    walletOprions.map((item:any, index:number) => {
                        return (
                            <WalletItem key={index}>
                                {
                                    item.link ?
                                    <a className="item" target="_blank" href={item.link} rel="noreferrer">
                                        <ItemName>{item.label}</ItemName>
                                        <img src={item.iconURL} alt="" />
                                    </a>
                                    :
                                    <div onClick={() => selectWalletItemClick(item)} className="item" >
                                        <ItemName>{item.label}</ItemName>
                                        <img src={item.iconURL} alt="" />
                                    </div>
                                }
                            </WalletItem>
                        )
                    })
                }
                {
                    active ?
                    <WalletItem>
                        <div className="item disconnect" onClick={() => deactivateClick()}>
                            <FormattedMessage id="connectmodel.disconnect" defaultMessage="" values={{name: ''}} />
                        </div>
                    </WalletItem>
                    :
                    ''
                }
            </ConectWalletModalBox>
        </Modal>
    )
}
export default ConectWalletModal
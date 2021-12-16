import styled from "styled-components"
import SwitchLocale from "components/SwitchLocale"
import SwitchTheme from "components/SwitchTheme"
import SwitchWallet from "components/SwitchWallet"
import { VideoCameraOutlined, MailOutlined } from '@ant-design/icons'
import { FormattedMessage } from 'react-intl'
import RouteLink from "../NavigationBar/routeLink"
import { useLocation } from 'react-router-dom'
import { Menu } from 'antd'
const { SubMenu } = Menu

const HeaderFrame = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .menuList {
        display: flex;
        align-items: center;
        height: var(--headerHg);
    }
`

const MenuFrame = styled.div`
    display: flex;
    align-items: center;
`

const SwitchBox = styled.div`
    display: flex;
    align-items: center;
`

const Header = (props:any) => {
    const location:any = useLocation()
    const defaultSelectedKeys = location.pathname
    const menuList = [
        { 
            to: '/overview',
            key: '/overview',
            normalIcon: MailOutlined, 
            activeIcon: VideoCameraOutlined,
            title: 'menu.dashboard',
            childrens: []
        },
        { 
            to: '/trade',
            key: '/trade',
            normalIcon: MailOutlined, 
            activeIcon: VideoCameraOutlined,
            title: 'menu.trade',
            childrens: []
        },
        { 
            to: '/shorting',
            key: '/shorting',
            normalIcon: MailOutlined, 
            activeIcon: VideoCameraOutlined,
            title: 'menu.shorting',
            childrens: []
        },
        { 
            to: '/earn',
            key: '/earn',
            normalIcon: MailOutlined, 
            activeIcon: VideoCameraOutlined,
            title: 'menu.earn',
            childrens: []
        },
        { 
            to: '/wallet',
            key: '/wallet',
            normalIcon: MailOutlined, 
            activeIcon: VideoCameraOutlined,
            title: 'menu.wallet',
            childrens: []
        },
        { 
            to: '/mint',
            key: 'mint',
            normalIcon: MailOutlined, 
            activeIcon: MailOutlined,
            title: 'menu.mint',
            childrens: [
                {
                    to: '/mint',
                    key: '/mint',
                    normalIcon: SwitchTheme, 
                    activeIcon: MailOutlined,
                    title: 'menu.mint',
                }
            ]
        },
    ]
    
    return (
        <HeaderFrame>
            <MenuFrame>
                <Menu className="menuList" defaultSelectedKeys={defaultSelectedKeys} mode="horizontal">
                    {
                        menuList.map((item:any) => {
                            return (
                                item.childrens.length > 0
                                ?
                                <SubMenu key={item.key} icon={<item.normalIcon />} 
                                    title={
                                        <FormattedMessage id={item.title} defaultMessage="" values={{name: ''}} />
                                    }>
                                    {
                                        item.childrens.map((childItem:any) => {
                                            return (
                                                <Menu.Item key={childItem.key}>
                                                    <RouteLink
                                                        defaultSelectedKeys={defaultSelectedKeys}
                                                        defaultKey={childItem.key}
                                                        to={childItem.to}
                                                        normalIcon={childItem.normalIcon}
                                                        activeIcon={childItem.activeIcon}
                                                        title={childItem.title}
                                                    />
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                                :
                                <Menu.Item key={item.key}>
                                    <RouteLink
                                        defaultSelectedKeys={defaultSelectedKeys}
                                        defaultKey={item.key}
                                        to={item.to}
                                        normalIcon={item.normalIcon}
                                        activeIcon={item.activeIcon}
                                        title={item.title}
                                    />
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </MenuFrame>
            
            <SwitchBox>
                <SwitchWallet />
                
                <SwitchTheme />
                
                <SwitchLocale />
            </SwitchBox>
        </HeaderFrame>
    )
}
export default Header
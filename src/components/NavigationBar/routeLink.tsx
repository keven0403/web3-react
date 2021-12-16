import { Link } from 'react-router-dom'
import Icon from '@ant-design/icons'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

const LinkClass = styled.div`
    display: flex;
    align-items: center;
    .navLabel {
        color: var(--menuBgColor);
    }
`

const RouteLink = (props:any) => {
    return (
        <Link to={props.to}>
            <LinkClass>
                <Icon component={
                        props.defaultSelectedKeys === props.defaultKey ? props.activeIcon : props.normalIcon
                    }
                />
                
                <span className="navLabel">
                    <FormattedMessage id={props.title} defaultMessage="" values={{name: ''}} />
                </span>
            </LinkClass>
        </Link>
    )
}

export default RouteLink
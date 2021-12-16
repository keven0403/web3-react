import { IntlProvider } from 'react-intl'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComHeader from 'components/Header'
import { useSelector} from 'react-redux'
import { Layout } from 'antd'
import NavigationBar from 'components/NavigationBar'
import Overview from './Overview'

const { Header, Content } = Layout

const App = (props:any) => {
    const locale = useSelector((state:any) => {
        return state.locale
    })
    return (
        <IntlProvider locale="en" messages={ locale } defaultLocale="en">
            <BrowserRouter>
                <Layout>
                    <NavigationBar />

                    <Layout>
                        <Header>
                            <ComHeader />
                        </Header>
                        
                        <Content>
                            <Routes>
                                <Route path="/" element={<Overview />} />
                                <Route path="/Overview" element={<Overview />} />
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        </IntlProvider>
    )
}
export default App
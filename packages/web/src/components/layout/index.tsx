import { Layout } from 'antd'

import Sider from './sider'
import Header from './header'
import Content from './content'

const BasicLayout: React.FC = () => {
  return (
    <Layout className="h-full">
      <Sider />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  )
}

export default BasicLayout

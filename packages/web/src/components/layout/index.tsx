import { Layout } from 'antd'

import LayoutHeader from './header'
import LayoutContent from './content'
import LayoutSider from './sider'

const BasicLayout: React.FC = () => {
  return (
    <Layout className="h-full">
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <LayoutContent />
      </Layout>
    </Layout>
  )
}

export default BasicLayout

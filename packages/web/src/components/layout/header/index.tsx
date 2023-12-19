import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Button, theme } from 'antd'

import useGlobalStore from '@/stores/useGlobal'
import HeaderBreadcrumb from './breadcrumb'

const { Header } = Layout

const LayoutHeader = () => {
  const { collapsed, setCollapsed } = useGlobalStore()
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Header className="flex items-center" style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64
        }}
      />
      <HeaderBreadcrumb />
    </Header>
  )
}

export default LayoutHeader

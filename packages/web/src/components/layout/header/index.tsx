import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Button, theme } from 'antd'

import useGlobalStore from '@/stores/useGlobal'

const { Header: AntHeader } = Layout

const Header = () => {
  const { collapsed, setCollapsed } = useGlobalStore()
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <AntHeader style={{ padding: 0, background: colorBgContainer }}>
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
    </AntHeader>
  )
}

export default Header

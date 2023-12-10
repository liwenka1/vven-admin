import { useState } from 'react'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu, Button, theme, MenuProps } from 'antd'
import { useNavigate, Outlet } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const BaseLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const navigate = useNavigate()
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return (
    <Layout className="h-full">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="m-[16px] h-[32px] rounded bg-slate-500" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={handleMenuClick}
          defaultSelectedKeys={['/home']}
          items={[
            {
              key: '/home',
              icon: <UserOutlined />,
              label: 'nav 1'
            },
            {
              key: '/user',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '/menu',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '/about',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
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
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default BaseLayout

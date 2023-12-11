import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

import useGlobalStore from '@/stores/useGlobal'

const Sider = () => {
  const { Sider } = Layout

  const navigate = useNavigate()
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  const { collapsed } = useGlobalStore()

  return (
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
  )
}

export default Sider

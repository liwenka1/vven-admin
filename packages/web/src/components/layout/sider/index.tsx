import { useEffect, useState } from 'react'

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import { useMatches, useNavigate } from 'react-router-dom'

import useGlobalStore from '@/stores/useGlobal'

const { Sider: AntSider } = Layout

const Sider = () => {
  const navigate = useNavigate()
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  const { collapsed } = useGlobalStore()

  const matches = useMatches()
  console.log(matches)
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  useEffect(() => {
    if (collapsed) {
      setOpenKeys([])
    } else {
      if (matches.length > 0) {
        const route = matches[matches.length - 1]
        const pathname = route?.pathname as string
        setOpenKeys([pathname])
        setSelectedKeys([pathname])
      }
    }
  }, [collapsed, matches])

  return (
    <AntSider trigger={null} collapsible collapsed={collapsed}>
      <div className="m-[16px] h-[32px] rounded bg-slate-500" />
      <Menu
        theme="dark"
        mode="inline"
        onClick={handleMenuClick}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
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
    </AntSider>
  )
}

export default Sider

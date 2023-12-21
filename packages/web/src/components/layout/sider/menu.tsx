import { AppstoreOutlined, CalendarOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

import useGlobalStore from '@/stores/useGlobal'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Navigation One', '/1', <MailOutlined />, [getItem('Option home', '/home')]),
  getItem('Navigation Two', '/2', <CalendarOutlined />, [getItem('Option about', '/about')]),
  getItem('Navigation Two', '/3', <AppstoreOutlined />, [getItem('Option user', '/user')]),
  getItem('Navigation Three', '/4', <SettingOutlined />, [getItem('Option menu', '/menu')])
]

const SiderMenu = () => {
  const navigate = useNavigate()
  const { openKeys, setOpenKeys, selectedKeys, setSelectedKeys } = useGlobalStore()

  const handleMenuClick: MenuProps['onClick'] = ({ key, keyPath }) => {
    setOpenKeys(keyPath)
    setSelectedKeys([key])
    navigate(key)
  }
  const onOpenChange = (openKeys: string[]) => {
    setOpenKeys(openKeys)
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      onClick={handleMenuClick}
      onOpenChange={onOpenChange}
      items={items}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
    />
  )
}

export default SiderMenu

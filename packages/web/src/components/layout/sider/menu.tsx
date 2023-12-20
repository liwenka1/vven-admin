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
  getItem('Navigation One', '/home', <MailOutlined />),
  getItem('Navigation Two', '/about', <CalendarOutlined />),
  getItem('Navigation Two', '/user', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')])
  ]),
  getItem('Navigation Three', '/menu', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10')
  ])
]

const SiderMenu = () => {
  const navigate = useNavigate()
  const { openKeys, setOpenKeys, selectedKeys, setSelectedKeys } = useGlobalStore()

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
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

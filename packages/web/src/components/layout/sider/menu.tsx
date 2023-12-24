import { AppstoreOutlined, CalendarOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

import useGlobalStore from '@/stores/useGlobal'
import { menus } from '@/router'
import { arrayToTree } from '@/utils'

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

const SiderMenu = () => {
  const result = arrayToTree(menus)
  console.log(result)
  const items: MenuItem[] = result.map((menu) => {
    if (menu.children) {
      const itemChildren = []
      for (const children of menu.children) {
        itemChildren.push(getItem(children.name, children.path))
      }
      return getItem(menu.name, menu.path, <MailOutlined />, itemChildren)
    }
  })

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

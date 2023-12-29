import { useEffect, useState } from 'react'

import { MailOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

import { useGlobalStore } from '@/stores'
import { menus } from '@/router'
import { MenuWithChildren, arrayToTree } from '@/utils'

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

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

  const [menuList, setMenuList] = useState<MenuItem[]>([])
  useEffect(() => {
    const buildMenuList = (menus: MenuWithChildren[]): MenuItem[] => {
      return menus.map((menu) => {
        const { name, path, children } = menu
        if (children.length > 0) {
          const itemChildren = buildMenuList(children)
          return getItem(name, path, <MailOutlined />, itemChildren)
        }
        return getItem(name, path, <MailOutlined />)
      })
    }
    const tree: MenuWithChildren[] = arrayToTree(menus)
    setMenuList(buildMenuList(tree))
  }, [])

  return (
    <Menu
      theme="dark"
      mode="inline"
      onClick={handleMenuClick}
      onOpenChange={onOpenChange}
      items={menuList}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
    />
  )
}

export default SiderMenu

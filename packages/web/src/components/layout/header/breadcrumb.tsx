import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

type Paths = typeof paths

const paths = [
  { name: 'Navigation One', path: '/1', children: [{ name: 'Navigation One', path: '/home' }] },
  { name: 'Navigation One', path: '/home' }
] as const

const itemsRender = (paths: Paths) => {
  const items = []
  for (const path of paths) {
    const item = {}
    item.key = path.path
    item.title = <Link to={path.path}>{path.name}</Link>
    items.push(item)
  }
  console.log(items)
  return items
}

const menuItems = [
  {
    key: '1',
    label: <Link to={'/home'}>General</Link>
  },
  {
    key: '2',
    label: <Link to={'/user'}>Layout</Link>
  },
  {
    key: '3',
    label: <Link to={'/about'}>Navigation</Link>
  }
]

const items = [
  {
    title: 'Ant Design'
  },
  {
    title: <Link to={'/menu'}>Component</Link>
  },
  {
    title: <Link to={'/menu'}>General</Link>,
    menu: { items: menuItems }
  },
  {
    title: 'Button'
  }
]

const HeaderBreadcrumb: React.FC = () => <Breadcrumb items={itemsRender(paths)} />

export default HeaderBreadcrumb

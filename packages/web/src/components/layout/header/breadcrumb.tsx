import React from 'react'

import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const items = [
  {
    path: '/home',
    title: 'home'
  },
  {
    path: 'first',
    title: 'first',
    menu: {
      items: [
        {
          path: '/general',
          title: 'General'
        },
        {
          path: '/layout',
          title: 'Layout'
        },
        {
          path: '/navigation',
          title: 'Navigation'
        }
      ]
    }
  },
  {
    path: 'second',
    title: 'second'
  }
]

const itemRender = (item, params, items, paths) => {
  const last = items.indexOf(item) === items.length - 1
  return last ? <span>{item.title}</span> : <Link to={paths.join('/')}>{item.title}</Link>
}

const HeaderBreadcrumb: React.FC = () => <Breadcrumb itemRender={itemRender} items={items} />

export default HeaderBreadcrumb

import React from 'react'
import { Breadcrumb } from 'antd'

const HeaderBreadcrumb: React.FC = () => (
  <Breadcrumb
    items={[
      {
        title: 'Home'
      },
      {
        title: <a href="">Application Center</a>
      },
      {
        title: <a href="">Application List</a>
      },
      {
        title: 'An Application'
      }
    ]}
  />
)

export default HeaderBreadcrumb

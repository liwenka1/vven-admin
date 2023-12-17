import React from 'react'
import { Breadcrumb as AntBreadcrumb } from 'antd'

const Breadcrumb: React.FC = () => (
  <AntBreadcrumb
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

export default Breadcrumb

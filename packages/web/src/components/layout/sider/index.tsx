import { Layout } from 'antd'

import useGlobalStore from '@/stores/useGlobal'
import SiderMenu from './menu'

const { Sider } = Layout

const LayoutSider = () => {
  const { collapsed } = useGlobalStore()

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="m-[16px] h-[32px] rounded bg-slate-500" />
      <SiderMenu />
    </Sider>
  )
}

export default LayoutSider

import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const LayoutContent = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Content className={`mx-[24px] my-[16px] min-h-[280px] p-[24px]`} style={{ background: colorBgContainer }}>
      <Outlet />
    </Content>
  )
}

export default LayoutContent

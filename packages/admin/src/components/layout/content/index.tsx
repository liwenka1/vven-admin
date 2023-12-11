import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'

const Content = () => {
  const { Content } = Layout
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Content className={`mx-[24px] my-[16px] min-h-[280px] bg-[${colorBgContainer}] p-[24px]`}>
      <Outlet />
    </Content>
  )
}

export default Content

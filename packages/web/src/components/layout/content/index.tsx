import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'

const { Content: AntContent } = Layout

const Content = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <AntContent className={`mx-[24px] my-[16px] min-h-[280px] bg-[${colorBgContainer}] p-[24px]`}>
      <Outlet />
    </AntContent>
  )
}

export default Content
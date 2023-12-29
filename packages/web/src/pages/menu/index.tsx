import { useRequest } from 'ahooks'

import { menuApi } from '@/api'

const Menu = () => {
  const { data, loading } = useRequest(menuApi.get)
  console.log(data, loading)

  return <div>这里是menu</div>
}

export default Menu

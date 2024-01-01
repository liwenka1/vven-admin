import { useRequest } from 'ahooks'

import { menuApi } from '@/api'

const Menu = () => {
  const { data, loading } = useRequest(menuApi.get)
  console.log(data, loading)
  const { data: errordata, loading: errorloading } = useRequest(menuApi.error)
  console.log(errordata, errorloading)

  return <div>这里是menu</div>
}

export default Menu

import { useRequest } from 'ahooks'

import { menuApi } from '@/api'

const Menu = () => {
  const { data, loading, error } = useRequest(menuApi.get)
  console.log(data, loading, error)
  const { data: errordata, loading: errorloading, error: errorError } = useRequest(menuApi.error)
  console.log(errordata, errorloading, errorError)

  return <div>这里是menu</div>
}

export default Menu

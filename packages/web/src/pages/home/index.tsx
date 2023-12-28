import { menuApi } from '@/api/menu'

const Home = () => {
  const res = menuApi.get()
  console.log(res)

  return <div>这里是HOME</div>
}

export default Home

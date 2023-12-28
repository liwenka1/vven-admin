import { menuApi } from '@/api/menu'

const Home = () => {
  const api = async () => {
    const res = await menuApi.get()
    console.log(res)
  }
  api()

  return <div>这里是HOME</div>
}

export default Home

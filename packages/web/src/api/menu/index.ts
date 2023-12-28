import request from '@/request'

export const menuApi = {
  get: () => {
    return request.get<Promise<unknown>>('/api/menu/search')
  }
}

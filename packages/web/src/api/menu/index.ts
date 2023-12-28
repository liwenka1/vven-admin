import request from '@/request'

export const menuApi = {
  get: () => {
    return request.get('/api/menu/search')
  }
}

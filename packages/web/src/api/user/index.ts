import request from '@/request'

export const userApi = {
  get: () => {
    return request.get('/api/user/get')
  }
}

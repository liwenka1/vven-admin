import request from '@/request'
import { MenuWithChildren } from '@/utils'

export const menuApi = {
  get: () => {
    return request.get<MenuWithChildren[]>('/api/menu/search')
  }
}

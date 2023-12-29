import { create } from 'zustand'

interface State {
  collapsed: boolean
  openKeys: string[]
  selectedKeys: string[]
  token: string
}

interface Action {
  setCollapsed: (collapsed: State['collapsed']) => void
  setOpenKeys: (openKeys: State['openKeys']) => void
  setSelectedKeys: (selectedKeys: State['selectedKeys']) => void
  setToken: (token: State['token']) => void
}

export const useGlobalStore = create<State & Action>((set) => ({
  collapsed: false,
  openKeys: [],
  selectedKeys: [],
  token: '',
  setCollapsed: (collapsed: State['collapsed']) => set({ collapsed }),
  setOpenKeys: (openKeys: State['openKeys']) => set({ openKeys }),
  setSelectedKeys: (selectedKeys: State['selectedKeys']) => set({ selectedKeys }),
  setToken: (token: State['token']) => set({ token })
}))

import { create } from 'zustand'

interface State {
  collapsed: boolean
  openKeys: string[]
  selectedKeys: string[]
}

interface Action {
  setCollapsed: (collapsed: State['collapsed']) => void
  setOpenKeys: (openKeys: State['openKeys']) => void
  setSelectedKeys: (selectedKeys: State['selectedKeys']) => void
}

const useGlobalStore = create<State & Action>((set) => ({
  collapsed: false,
  setCollapsed: (collapsed: State['collapsed']) => set({ collapsed }),
  openKeys: [],
  setOpenKeys: (openKeys: State['openKeys']) => set({ openKeys }),
  selectedKeys: [],
  setSelectedKeys: (selectedKeys: State['selectedKeys']) => set({ selectedKeys })
}))

export default useGlobalStore

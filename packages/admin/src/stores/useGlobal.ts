import { create } from 'zustand'

interface State {
  collapsed: boolean
}

interface Action {
  setCollapsed: (collapsed: State['collapsed']) => void
}

const useGlobalStore = create<State & Action>((set) => ({
  collapsed: false,
  setCollapsed: (collapsed: State['collapsed']) => set({ collapsed })
}))

export default useGlobalStore

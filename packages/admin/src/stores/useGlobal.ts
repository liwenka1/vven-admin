import { create } from 'zustand'

interface GlobalStore {
  bears: number
  increasePopulation: (bears: GlobalStore['bears']) => void
  removeAllBears: () => void
}

const useGlobalStore = create<GlobalStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useGlobalStore

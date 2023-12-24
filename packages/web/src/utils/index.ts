type Menu = {
  id: number
  name: string
  parentId: null | number
  path: string
  show: boolean
}

type MenuWithChildren = Menu & { children: MenuWithChildren[] }

const arrayToTree = (items: Menu[]) => {
  const result = []
  const map: Record<number, MenuWithChildren> = {}
  for (const item of items) {
    const { id, parentId } = item

    if (!map[id]) {
      map[id] = {
        ...item,
        children: []
      }
    }

    map[id] = {
      ...item,
      children: map[id]['children']
    }

    const treeItem = map[id]

    if (parentId === null) {
      result.push(treeItem)
    } else {
      if (!map[parentId]) {
        map[parentId] = {
          ...treeItem,
          children: []
        }
      }
      map[parentId].children?.push(treeItem)
    }
  }
  return result
}

export { arrayToTree }

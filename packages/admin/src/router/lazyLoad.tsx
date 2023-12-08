import { Suspense } from 'react'

const lazyLoad = (Component: React.FC) => (
  <Suspense>
    <Component />
  </Suspense>
)

export default lazyLoad

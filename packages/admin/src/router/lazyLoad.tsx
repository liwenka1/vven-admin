import { Suspense } from 'react'

import Loading from '@/components/loading'

const lazyLoad = (Component: React.FC) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
)

export default lazyLoad

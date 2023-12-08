import { lazy } from 'react'

import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import lazyLoad from './lazyLoad'
import BaseLayout from '@/components/layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: lazyLoad(lazy(() => import('@/pages/home')))
      },
      {
        path: 'about',
        element: lazyLoad(lazy(() => import('@/pages/about')))
      }
    ]
  }
]

export const browserRouter = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_ROUTER_BASE_URL
})

import { lazy } from 'react'

import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import lazyLoad from './lazyLoad'
import BasicLayout from '@/components/layout'
import NotFound from '@/components/notFound'

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: BasicLayout,
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
        path: 'user',
        element: lazyLoad(lazy(() => import('@/pages/user')))
      },
      {
        path: 'menu',
        element: lazyLoad(lazy(() => import('@/pages/menu')))
      },
      {
        path: 'about',
        element: lazyLoad(lazy(() => import('@/pages/about')))
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  }
]

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_ROUTER_BASE_URL
})

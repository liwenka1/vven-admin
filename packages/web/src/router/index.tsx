import { lazy } from 'react'

import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import lazyLoad from './lazyLoad'
import BasicLayout from '@/components/layout'
import NotFound from '@/components/notFound'

export const menus = [
  {
    id: 0,
    name: '首页',
    parentId: null,
    path: '',
    show: true
  },
  {
    id: 1,
    name: '工作台',
    parentId: 0,
    path: '/home',
    show: true
  },
  {
    id: 2,
    name: '关于',
    parentId: 0,
    path: '/about',
    show: true
  },
  {
    id: 3,
    name: '用户管理',
    parentId: 0,
    path: '/user',
    show: true
  },
  {
    id: 4,
    name: '菜单管理',
    parentId: 0,
    path: '/menu',
    show: true
  }
]

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

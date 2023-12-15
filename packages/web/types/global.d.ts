interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

declare interface ViteEnv {
  VITE_TITLE: string
  VITE_PORT: string
  VITE_API_BASE_URL: string
  VITE_PUBLIC_PATH: string
  VITE_ROUTER_BASE_URL: string
  VITE_NAME: string
}

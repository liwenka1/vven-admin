import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_PORT, VITE_API_BASE_URL, VITE_PUBLIC_PATH } = loadEnv(mode, process.cwd()) as Record<
    keyof ViteEnv,
    string
  >

  return {
    plugins: [
      react(),
      // 打包体积分析
      visualizer(),
      // 文件压缩
      viteCompression({
        verbose: true, // 是否在控制台中输出压缩结果
        disable: false,
        threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
        algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw'
        ext: '.gz',
        deleteOriginFile: false // 源文件压缩后是否删除(无需删除，防止浏览器不支持 gizp)
      })
    ],
    // 开发或生产环境服务的公共基础路径 配置引入相对路径
    base: VITE_PUBLIC_PATH,
    resolve: {
      // 文件系统路径别名
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      host: true, // 指定服务器应该监听哪个 IP 地址
      hmr: true, // 热更新
      port: Number(VITE_PORT), // 指定开发服务器端口
      strictPort: true, // 若端口已被占用则会直接退出
      open: true, // 启动时自动在浏览器中打开应用程序
      // 配置自定义代理规则
      proxy: {
        '/api': {
          target: VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    // 剔除console+debugger
    esbuild: {
      drop: ['console', 'debugger']
    },
    build: {
      chunkSizeWarningLimit: 2000, // chunk 大小警告的限制
      outDir: 'dist', // 指定输出路径
      rollupOptions: {
        output: {
          // 配置打包文件分类输出
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
          // 最小化拆分包
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  }
})

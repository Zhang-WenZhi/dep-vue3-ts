import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'; // @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    // open: true,
    open: '/', //开发服务器启动时，自动在浏览器中打开应用程序。
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // base: '/dep-vue3-ts/', // 必须与仓库名一致
  // base: process.env.NODE_ENV === 'production' ? '/dep-vue3-ts/' : './',
  base: './', // 核心配置项，控制资源路径 // 本地打包是要这样才能运行 // github用这个没有仓库名访问也可以
  build: {
    outDir: 'dist', // 默认构建目录
    // assetsDir: 'assets', // 静态资源目录
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            console.log("打包的第三方库", id);
            return 'vendor'
          }
        },
        // entryFileNames: 'js/[name].js', // 入口文件
        entryFileNames: 'js/[name]-[hash].js', // 入口文件
        // chunkFileNames: 'js/[name].js', // 分包引入文件
        chunkFileNames: 'js/[name]-[hash].js', // 分包引入文件
        // assetFileNames: '[ext]/[name]-[hash].[ext]', // 静态文件
        // assetInfo: PreRenderedAsset 但是不知如何导入？
        assetFileNames(assetInfo: any){
          console.log(assetInfo)
          // 文件名称
          if (assetInfo.name.endsWith('.css')) {
            // return 'css/[name].css'
            return 'css/[name]-[hash].css'
          }
          // 图片名称
          // 定义图片后缀
          const imgExts= ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.ico']
          if(imgExts.some(ext => assetInfo.name.endsWith(ext))){
            // return 'imgs/[name].[ext]'
            return 'imgs/[name]-[hash].[ext]'
          }
          //  remaining assets 剩余资源文件
          // return 'assets/[name].[ext]'
          return 'assets/[name]-[hash].[ext]'
        },
      }
    }
  },
})

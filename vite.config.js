import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import './src/assets/styles/variables.less';
      `
      }
    }
  },
  //跨域请求
  server: {
    proxy: {
      '/api': {
        target: 'https://you.163.com',//小米有品接口
        changeOrigin: true,
        rewrite: path=>path.replace(/^\/api/,'')
      },
      '/foo': {
        target: 'http://localhost:7788',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/foo/, '')
        }
    },
  }
})


import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

import styleImport from 'vite-plugin-style-import'
import ViteComponents, {
  ElementPlusResolver
} from 'vite-plugin-components'

// import Components from 'unplugin-vue-components/vite'
// import {
//   ElementPlusResolver
// } from 'unplugin-vue-components/resolvers'

// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import {
  resolve
} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    //按需导入element-plus组件
    ViteComponents({
      customComponentResolvers: [ElementPlusResolver()],
    }),
    //按需导入element-plus的css样式
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        resolveStyle: name => {
          return `element-plus/lib/theme-chalk/${name}.css`
        },
      }, ],
    })

    // Components({
    //   resolvers: [ElementPlusResolver()],
    //   dts: true,
    //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    // })
  ],
  resolve: {
    extensions: ['.vue', '.ts', '.tsx', '.js', '.jsx', '.mjs'],
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
      'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    }
  },
  base: './', // 设置打包路径
  // 引入全局scss文件
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  },
  server: {
    host: "0.0.0.0",
    // host: "192.168.1.42",
    port: 9999, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        // target: 'http://106.52.26.250:56788/myhd',
        // target: 'http://222.244.144.181:7660/myhd',
        target: 'https://xmy.jiabaokeji.com.cn:56780/myhd',
        secure: false, // false为http访问，true为https访问
        changeOrigin: true, // 跨域访问设置，true代表跨域
        // ws: true,
        rewrite: (path) => path.replace('/api/', '/')
      },
      // '/pay': {
      //   target: 'https://api.mch.weixin.qq.com',
      //   // target: 'http://106.52.26.250:8080/myhd',
      //   secure: false, // false为http访问，true为https访问
      //   changeOrigin: true, // 跨域访问设置，true代表跨域
      //   // ws: true,
      //   rewrite: (path) => path.replace('/pay/', '/')
      // }
    }
  }
})
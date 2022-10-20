import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    // 引用使用less的库要配置一下
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },

    resolve: {
        // 设置别名
        alias: [{ find: '@', replacement: '/src' }]
    },
    server: {
        port: 8060, // 启动端口
        hmr: {
            host: '127.0.0.1',
            port: 8060
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'https://yapi.mlamp.cn/mock/409',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    }
});

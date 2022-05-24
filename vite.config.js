import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const { defineConfig } = require('@vue/cli-service')
// https://vitejs.dev/config/
// export default defineConfig({
//
// })

module.exports =   defineConfig({
  base: '/horoscope/',
  plugins: [vue()],
  // publicPath: './dist/', //process.env.NODE_ENV === "production" ? "/horoscope/" : "/",
})
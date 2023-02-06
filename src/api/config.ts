// config.js文件用来存放后端请求接口地址
interface Base {
  [key: string]: string | null
}
export default {
  baseUrl: {
    dev: '/api' // 开发环境
    // dev: 'http://118.89.35.95:8080'
    // pro: "http://production.com" 生产环境
  }
}
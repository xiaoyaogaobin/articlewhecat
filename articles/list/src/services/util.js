import wepy from 'wepy'

const host = 'http://laravel.ishilf.com/api'
const util = {
  // 发送异步请求
  api: async (options) => {
    options.url = host + '/' + options.url
    // console.log(options)
    wepy.showLoading({title: '加载中'})
    let response = await wepy.request(options)
    // console.log(response)
    // console.log(999)
    wepy.hideLoading()
    //   /返回数据
    return response
  },
  login: async (options) => {
    options.url = 'login'
    options.method = 'POST'
    // console.log(options)
    let response = await util.api(options)
    // console.log(response)
    if (response.statusCode === 200) {
      response.data.expires_in = new Date().getTime() + response.data.expires_in * 1000
      wepy.setStorageSync('token', response)
    }
    return response
  },
  // 获取存储的 token 数据
  getToken: () => {
    // 获取登录存储的 token
    let token = wepy.getStorageSync('token')

    if (token) {
      return token.data.expires_in > new Date().getTime() ? token.data.access_token : null
    }
  },
  // 异步请求 需要 token 验证
  authApi: async (options) => {
    options.url = host + '/' + options.url
    options.header = options.header ? options.header : {}
    options.header.Authorization = 'Bearer ' + util.getToken()

    let response = await wepy.request(options)
    // 返回数据
    return response
  },
  // 注销登录
  logout: async () => {
    let response = await util.authApi({url: 'logout'})

    if (response.statusCode === 200) {
      wepy.removeStorageSync('token')
    }
    return response
  }
}
export default util

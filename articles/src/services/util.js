import wepy from 'wepy'
// 定义一个全局文件，好方便来接受文件
//定义接受过来的网站
const host = 'http://www.moko001.com/api'
//定义异步请求
const util = {
  // 发送异步请求
  api: async (options) => {
//获取api 地址
    options.url = host + '/' + options.url
    // console.log(options)
    //加载数据
    wepy.showLoading({title: '加载中'})

    let response = await wepy.request(options)
    //结束数据
    wepy.hideLoading()
    //   /返回数据
    return response
  },
//请求异步登录
  login: async (options) => {
    // 设置传送方式为 login
    options.url = 'login'
    //设置传送方式为post
    options.method = 'POST'
    //这样就可以吧地址跟 传送方式传进去了
    let response = await util.api(options)
    //返回数据
    // console.log(response)
    // 进行判断如果登录设置token 时间
    if (response.statusCode === 200) {
      //接口传来的是秒 而new date.gettime 是毫秒 所以需要加上原先时间
      //获得登录的时间加上期限
      response.data.expires_in = new Date().getTime() + response.data.expires_in * 1000

      //存储tokan
      wepy.setStorageSync('token', response)

    }
    return response
  },
  //得到token
  getToken: async () => {
    // 获取登录存储的 token
    let token = wepy.getStorageSync('token')

    if (token) {
      // console.log(token.data)
      return token.data.expires_in > new Date().getTime() ? token.data.access_token : null
    }
  },
  // 传输接口
  authApi: async (options) => {
    //拼接网址
    options.url = host + '/' + options.url
    //判断如果有头部就用，没有就为空
    options.header = options.header ? options.header : {}
    // 头部带的token
    options.header.Authorization = 'Bearer ' + util.getToken()
    // console.log(options)
    let response = await wepy.request(options)
    // 返回数据
    return response
  },
//退出登录
  logout: async () => {
    //退出需要携带header 头部
    let response = await util.authApi({url: 'logout'})

    // if (response.statusCode === 200) {
    //
    //   wepy.removeStorageSync('token')
    // }
    return response
  }

}


export default util




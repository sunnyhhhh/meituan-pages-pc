import axios from 'axios'

axios.defaults.baseURL = 'http://api.duyiedu.com'

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做点什么
  config.params = {
    ...config.params,
    appkey: 'sunnypig_1551697378883'
  }
  return config
}, function (error) {
  // 对错误请求做些什么
  return Promise.reject(error)
})

export default axios

import axios from '@/axios.js'

let api = {
  searchHotWords (params) {
    return axios.get('api/meituan/header/searchHotWords.json', params);
  },
  getSearchList (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  getMenuList (params) {
    return axios.get('/api/meituan/index/nav.json', params)
  },
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', {params})
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api

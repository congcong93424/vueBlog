import { reqMethodsPost } from './axios'

export default {
    // 请求mock数据 
    mockdata: params => reqMethodsPost('/mock/getData',params)
}
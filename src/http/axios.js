import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


axios.defaults.timeout = 5000;
// axios.defaults.baseURL ='http://www.liveu.xin';
// 请求拦截器
axios.interceptors.request.use(function(config){
    return config
}, function(error) {
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function(response){
    return response
},function(error){
    return Promise.reject(error)
})

export default {
    mockdata(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(response => {
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

export let reqMethodsPost = function(url,params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}
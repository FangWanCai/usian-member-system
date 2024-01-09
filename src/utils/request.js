// 引入axios
import axios from "axios"

// 创建axios实例，返回实例对象
const service = axios.create({
    // 地址
    baseURL: '',
    // 超时时间
    timeout: 5000
})

// 请求拦截
service.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
})

// 响应拦截
service.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
})

// 导出实例对象
export default service
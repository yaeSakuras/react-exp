import axios from 'axios';
//挂载window全局访问
window.axios = axios;
//axios默认参数配置
axios.defaults.timeout = 1000 * 60;
//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, (error) => {
    return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    return Promise.reject(error);
});
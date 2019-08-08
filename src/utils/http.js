import axios from 'axios';

// import qs from 'qs'
//封装
const server = axios.create({
    timeout:5000,
    withCredentials:true
})

//添加请求拦截器
server.interceptors.request.use((config)=>{
    if (config.method.toUpperCase() == "GET"){
        // config.params = {...config.data};
    }else if (config.method.toUpperCase() == "POST"){
        config.headers["content-type"] = "appliaction/x-www-form-urlencoded"
    }
    return config;

},(err)=>{
    Promise.reject(err);
})

//添加响应拦截器
server.interceptors.response.use((res)=>{
    if (res.statusText == "OK"){
        return res.data
    }
},(err)=>{
    Promise.reject(err);
})


//导出
export default (method,url,data={})=> {
    if (method.toUpperCase() == "GET") {
        return server.get(url,{
            params:data
        })
    }else if (method.toUpperCase() == "POST"){
        return server.post(url,data)
    }
}
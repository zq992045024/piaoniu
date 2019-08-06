import axios from "axios";
import qs from "qs"
import Loading from "../lib/loading/index.js"

let vm = Loading()
const server = axios.create({
    //baseURL:process.env.NODE.ENV != 'development'?"http://www.baidu.com":"http://localhost:3000"
    timeout: 5000,
    withCredentials: true,
})
server.interceptors.request.use(config => {
    if (config.method == 'get') {
        config.params = { ...config.data }
    } else if (config.method == 'post') {
         config.headers['content-type'] = 'application/x-www-form-urlencoded'
        // config.data = qs.stringify(config.data)
    }
    vm.handlerMount();
    return config;
    
},(err)=>{
    Promise.reject(err)
})


server.interceptors.response.use((res)=>{
    if(res.statusText =="OK"){
        vm.handlerDestory();
        return res.data
        
    }
},(err)=>{
    Promise.reject(err)
})


export default (method,url,data={}) => {
    if(method.toUpperCase() == "GET"){
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase() == "POST"){
        return server.post(url,data)
    }
}   
import http from "utils/http.js"

export const home_api = (pageIndex,pageSize)=>http('get',"/api/v2/home/recommends",{pageIndex:pageIndex,pageSize:pageSize})

export const city_api = ()=>http("get","/api/v2/cities/active")

export const city_hot_api = ()=>http("get","/api/v1/cities/hot")

export const user_api = ()=>http("get","/user/usersList")

export const search_api = (input,size)=>http("get","/api/v2/activities/suggest",{input:input,size:size})

export const users_api = (username,password)=>http("post","/piaoniu/register",{username:username,password:password})

export const users_login_api = (username,password)=>http("post","/piaoniu/login",{username:username,password:password})

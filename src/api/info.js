import http from "utils/http.js"

export const home_api = (pageIndex,pageSize)=>http('get',"/api/v2/home/recommends",{pageIndex:pageIndex,pageSize:pageSize})

export const city_api = ()=>http("get","/api/v2/cities/active")

export const city_hot_api = ()=>http("get","/api/v1/cities/hot")

export const user_api = ()=>http("get","/user/usersList")

export const search_api = (input,size)=>http("get","/api/v2/activities/suggest",{input:input,size:size})

export const users_api = (username,password)=>http("post","/piaoniu/register",{username:username,password:password})

export const users_login_api = (username,password)=>http("post","/piaoniu/login",{username:username,password:password})

export const tick_api =(tickId)=>http('get','/api/activities',{tickId:tickId})



//分支
//演唱会
export const movie_now_api = (cityId=10)=>http("get",
    "/api/v3/activities?pageIndex=1&categoryId=1&time=&sort=&seatMap=false&highestPrice=&lowestPrice")

//话剧
export const movie_coming_api = (cityId=10)=>http("get",
    "/api/v3/activities?pageIndex=1&categoryId=2&time=&sort=&seatMap=false&highestPrice=&lowestPrice")

//休闲展览
export const movie_vocal_api = (cityId=10)=>http("get",
    "api/v3/activities?pageIndex=1&categoryId=5&time=&sort=&seatMap=false&highestPrice=&lowestPrice")

//体育赛事
export const movie_Tiyu_api = (cityId=10)=>http("get",
    "/api/v3/activities?pageIndex=1&categoryId=8&time=&sort=&seatMap=false&highestPrice=&lowestPrice")

//旅游玩乐
export const movie_Wanle_api = (cityId=10)=>http("get",
"api/v3/activities?pageIndex=1&categoryId=9&time=&sort=&seatMap=false&highestPrice=&lowestPrice")

//音乐会
export const movie_Yinyue_api = (cityId=10)=>http("get",
    "api/v3/activities?pageIndex=1&categoryId=3&time=&sort=&seatMap=false&highestPrice=&lowestPrice")


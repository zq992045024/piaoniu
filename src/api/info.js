import http from "utils/http.js"
import https from "utils/http.js"

export const home_api = (cityId=10)=>http('get',"/api/v2/home/recommends?pageIndex=1&pageSize=10",{cityId:cityId})


export const city_api = ()=>http("get","/goodss/goodsList")


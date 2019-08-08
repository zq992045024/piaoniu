import http from '../utils/http.js'

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





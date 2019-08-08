import {city_api} from "api/info.js"
import {city_hot_api} from "api/info.js"

const state = {
    cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
    cityHot:JSON.parse(sessionStorage.getItem("cityHot"))||[],
    cityName: sessionStorage.getItem("cityName")||"北京",
    cityId:sessionStorage.getItem("cityId")||2
}
const actions = {
    async handleGetCityAction({commit}){
        
        let data = await city_api();
        commit("handleGetCity",data);

        let hotdata = await city_hot_api();
        commit("handleGetHotCity",hotdata)
    }
}
const mutations = {
    handleGetCity(state,params){
        let citylist=[],cityhot=[];
        for(var i=0;i<params.length;i++){
            var letterFirst = params[i].firstLetter;
            if(isCityList(letterFirst)){
                for(var j=0;j<citylist.length;j++){
                    if(letterFirst == citylist[j].index){
                        citylist[j].list.push({cityId:params[i].cityId,cityName:params[i].cityName,})
                        break;
                    }
                }
            }else{
                citylist.push({index:letterFirst,list:[{cityId:params[i].cityId,cityName:params[i].cityName}]})
            }
        }
        function isCityList(letterFirst){
            var bStop = false
            for(var i=0;i<citylist.length;i++){
                if(citylist[i].index == letterFirst){
                    bStop = true;
                    break;
                }
            }
            return bStop
        }
        citylist.sort(function(rst,next){
            if(rst.index>next.index){
                return 1 
            }else{
                return -1
            }
        })
       state.cityList = citylist
       
       sessionStorage.setItem("cityList",JSON.stringify(state.cityList))
       
    },
    handleGetHotCity(state,params){
        for(var i=0;i<params.length;i++){
            state.cityHot.push({cityId:params[i].cityId,cityName:params[i].cityName,})
        }
        sessionStorage.setItem("cityHot",JSON.stringify(state.cityHot))
    }
    
}


export default ({
    state,
    actions,
    mutations,
    namespaced:true
})
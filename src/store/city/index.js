import {city_api} from "api/info.js"
const state = {
    cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
    cityHot:JSON.parse(sessionStorage.getItem("cityHot"))||[],
    cityName: sessionStorage.getItem("cityName")||"北京",
    cityId:sessionStorage.getItem("cityId")||10
}
const actions = {
    async handleGetCityAction({commit}){
        let data = await city_api();
        commit("handleGetCity",data)
    }
}
const mutations = {
    handleGetCity(state,params){
        console.log(params.data)
        let citylist=[],cityhot=[];
        params = params.data
        for(var i=0;i<params.length;i++){
            
            if(params[i].isHot){
                state.cityHot.push({cityId:params[i].id,cityName:params[i].nm,})
            }
        }
        for(var i=0;i<params.length;i++){
            var letterFirst = params[i].yp.substr(0,1).toUpperCase();
            if(isCityList(letterFirst)){
                for(var j=0;j<citylist.length;j++){
                    if(letterFirst == citylist[j].index){
                        citylist[j].list.push({cityId:params[i].id,cityName:params[i].nm,})
                        break;
                    }
                }
            }else{
                citylist.push({index:letterFirst,list:[{cityId:params[i].id,cityName:params[i].nm}]})
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
       
       sessionStorage.setItem("cityHot",JSON.stringify(state.cityHot))
    }
    
}


export default ({
    state,
    actions,
    mutations,
    namespaced:true
})
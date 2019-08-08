<!--<template>-->

    <!--<div class="movieWrapper">-->

        <!--<div class="box" @click="abc()">返回</div>-->
        <!--<div class="box1">-->
            <!--<i class="iconfont">&#xe605;</i>-->
            <!--<input type="text" value placeholder=" 搜索明星、演出、场馆">-->
        <!--</div>-->
        <!--<div class="list">-->
            <!--<ul>-->
                <!--<li>-->
                    <!--<select>-->
                        <!--<option>综合排序</option>-->
                        <!--<option>最新优先</option>-->
                        <!--<option>低价优先</option>-->
                        <!--<option>好评优先</option>-->
                    <!--</select>-->
                <!--</li>-->
                <!--<li>全部时间</li>-->
                <!--<li>在线选座</li>-->
            <!--</ul>-->
        <!--</div>-->
        <!--<hr/>-->
        <!--<div class="Middle">-->
            <!--<div class="Middle_item" v-for="(item,index) in movieList">-->
                <!--<div class="Middle_item_pic">-->
                    <!--<img :src="item.poster"/>-->
                <!--</div>-->
                <!--<div class="Middle_item_info">-->
                    <!--<h3>{{item.name}}</h3>-->
                    <!--<p>{{item.timeRange}}|<span class="Middle_item_pi">{{item.venueName}}</span></p>-->
                    <!--<p>评分<span class="Middle_item_pice">{{item.rank}}</span></p>-->
                    <!--<p><span class="Middle_item_price">{{item.lowPrice}}</span>元起</p>-->
                    <!--<p>{{item.desc}}</p>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->

    <!--import {movie_now_api} from "../../api/movie";-->

    <!--export default {-->
        <!--name: "List",-->
        <!--methods:{-->
            <!--abc(){-->
                <!--this.$route.push('/Vocal')-->
            <!--},-->
        <!--},-->
        <!--async created(){-->
            <!--let data = await movie_now_api();-->

            <!--this.movieList = data.data;-->
            <!--// console.log(this.movieList);-->
        <!--},-->
        <!--data(){-->
            <!--return {-->
                <!--movieList:[]-->
            <!--}-->
        <!--},-->
        <!--// created(){//-->
        <!--//     axios({-->
        <!--//         method:"get",-->
        <!--//         url:"https://m.piaoniu.com/api/v3/activities?pageIndex=1&categoryId=1&time=&sort=&seatMap=false&highestPrice=&lowestPrice"-->
        <!--//     }).then((data)=>{-->
        <!--//         console.log(data)-->
        <!--//     })-->
        <!--// }-->
    <!--}-->
<!--</script>-->

<!--<style>-->
    <!--.box{-->
        <!--color: red;-->
        <!--font-size: .3rem;-->
        <!--position: absolute;-->
        <!--top: 17px;-->
        <!--left: 10px;-->
        <!--font-size:.3rem;-->
    <!--}-->
    <!--.box1 i{-->
        <!--position: absolute;-->
        <!--left: 60px;-->
        <!--top: 15px;-->
        <!--z-index: 1;-->
    <!--}-->
    <!--.box1 input{-->
        <!--background: #e9e9e9;-->
        <!--width: 300px;-->
        <!--text-align: center;-->
        <!--position: absolute;-->
        <!--top: 12px;-->
        <!--left: 55px;-->
        <!--height: 30px;-->
    <!--}-->
    <!--#footer{-->
        <!--width: 100%;-->
        <!--height: 1rem;-->
        <!--background: #ffffff;-->
        <!--position: fixed;-->
        <!--left: 10px;-->
        <!--top: 70px;-->
        <!--overflow: auto-->
    <!--}-->
    <!--#footer ul,#footer ul li{-->
        <!--height: 100%;-->
        <!--width: 100%;-->

    <!--}-->
    <!--#footer ul {-->
        <!--display: flex;-->
        <!--white-space: nowrap;-->
    <!--}-->
    <!--#footer ul li {-->
        <!--display: flex;-->
        <!--flex-direction: column;-->
        <!--justify-content: center;-->
        <!--align-items: center;-->
        <!--font-size:.4rem;-->
        <!--margin-left: 20px;-->
    <!--}-->
    <!--#footer ul .router-link-active {-->
        <!--color: #c33;-->
    <!--}-->
    <!--.list{-->
        <!--position: absolute;-->
        <!--top: 130px;-->
        <!--left: 10px;-->

    <!--}-->
    <!--.list ul{-->
        <!--display: flex;-->
    <!--}-->
    <!--.list ul li{-->
        <!--margin-left: 40px;-->
        <!--align-items: center;-->
        <!--font-size:.3rem;-->
    <!--}-->
    <!--select{-->
        <!--outline: none;-->
        <!--border: none;-->
    <!--}-->
    <!--.Middle{-->
        <!--width: 100%;-->
        <!--height: 100%;-->
        <!--position: absolute;-->
        <!--top: 170px;-->
        <!--left: 25px;-->
        <!--overflow: auto;-->

    <!--}-->
    <!--.Middle .Middle_item .Middle_item_pic{-->
        <!--width: 1.3rem;-->
        <!--height: 2rem;-->
    <!--}-->
    <!--.Middle .Middle_item .Middle_item_pic img{-->
        <!--width: 75px;-->
        <!--height: 100px;-->
    <!--}-->
    <!--.Middle .Middle_item{-->
        <!--display: flex;-->
        <!--margin-top: 30px;-->
        <!--width: 345px;-->
        <!--height: 180px;-->
    <!--}-->
    <!--.Middle .Middle_item .Middle_item_pi{-->
        <!--font-size: 12px;-->
        <!--color: #999;-->
        <!--margin-top: 9px;-->


    <!--}-->

    <!--.Middle .Middle_item .Middle_item_pice{-->
        <!--font-size: 12px;-->
        <!--font-weight: 700;-->
        <!--color: #ffb02e;-->
    <!--}-->
    <!--.Middle .Middle_item .Middle_item_price{-->
        <!--color: #ff2661;-->
        <!--font-size: 18px;-->
        <!--margin-right: 4px;-->
        <!--font-weight: 700;-->
    <!--}-->
    <!--.Middle .Middle_item .Middle_item_info{-->
        <!--line-height: 30px;-->
        <!--margin-left: 30px;-->

        <!--border-bottom: 1px solid hsla(0,0%,90%,.5);-->


    <!--}-->
    <!--.Middle .Middle_item .Middle_item_info p{-->
        <!--font-size: .3rem;-->
        <!--color: #999;-->
        <!--white-space: nowrap;-->
        <!--text-overflow: ellipsis;-->
        <!--overflow: hidden;-->

     <!--}-->
    <!--.movieWrapper{-->
        <!--height: 100%;-->
        <!--overflow: auto;-->


    <!--}-->

<!--</style>-->
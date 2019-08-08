<template>

    <div class="movieWrapper">

        <div class="Middle">
            <v-touch class="Middle_item" v-for="(item,index) in movieList" @tap="ych(item.id)" tag="div">
                <div class="Middle_item_pic">
                    <img :src="item.poster"/>
                </div>
                <div class="Middle_item_info">
                    <h3>{{item.name}}</h3>
                    <p>{{item.timeRange}}|<span class="Middle_item_pi">{{item.venueName}}</span></p>
                    <p>评分<span class="Middle_item_pice">{{item.rank}}</span></p>
                    <p><span class="Middle_item_price">{{item.lowPrice}}</span>元起</p>
                    <p>{{item.desc}}</p>
                </div>
            </v-touch>
        </div>
    </div>
</template>
<script>

    import {movie_now_api} from "../../api/movie";

    export default {
        name: "List",
        methods:{
            ych(id){
                this.console.log(id)
            },
        },
        async created(){
            let data = await movie_now_api();

            this.movieList = data.data;
            // console.log(this.movieList);
        },
        data(){
            return {
                movieList:[]
            }
        },
        // created(){//
        //     axios({
        //         method:"get",
        //         url:"https://m.piaoniu.com/api/v3/activities?pageIndex=1&categoryId=1&time=&sort=&seatMap=false&highestPrice=&lowestPrice"
        //     }).then((data)=>{
        //         console.log(data)
        //     })
        // }
    }
</script>

<style>

    .Middle{
        /*width: 100%;*/
        height: 100%;
        position: absolute;
        top: 170px;
        left: 25px;
        overflow: auto;

    }
    .Middle .Middle_item .Middle_item_pic{
        width: 1.3rem;
        height: 2rem;
    }
    .Middle .Middle_item .Middle_item_pic img{
        width: 75px;
        height: 100px;
    }
    .Middle .Middle_item{
        display: flex;
        margin-top: 30px;
        width: 345px;
        height: 180px;
    }
    .Middle .Middle_item .Middle_item_pi{
        font-size: 12px;
        color: #999;
        margin-top: 9px;


    }

    .Middle .Middle_item .Middle_item_pice{
        font-size: 12px;
        font-weight: 700;
        color: #ffb02e;
    }
    .Middle .Middle_item .Middle_item_price{
        color: #ff2661;
        font-size: 18px;
        margin-right: 4px;
        font-weight: 700;
    }
    .Middle .Middle_item .Middle_item_info{
        line-height: 30px;
        margin-left: 30px;

        border-bottom: 1px solid hsla(0,0%,90%,.5);


    }
    .Middle .Middle_item .Middle_item_info p{
        font-size: .3rem;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

     }
    .movieWrapper{
        height: 100%;
        overflow: auto;


    }

</style>
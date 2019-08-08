<template>
    <div>
        <div class="Middle">
            <div class="Middle_item" v-for="(item,index) in movieList" :key="index">
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
            </div>
        </div>
    </div>
</template>

<script>
    import {movie_Wanle_api} from 'api/info'
    export default {
        name: "index",
        async created(){
            let data = await movie_Wanle_api()
            this.movieList = data.data;
        },
        data(){
            return {
                movieList:[]
            }
        }

    }
</script>

<style scoped>

    .Middle{
        /*width: 100%;*/
        height: 100%;
        position: absolute;
        top: 1.4rem;
        left: .5rem;
        overflow: auto;

    }
    .Middle .Middle_item .Middle_item_pic{
        width: 1.3rem;
        height: 2rem;
    }
    .Middle .Middle_item .Middle_item_pic img{
        width:1.5rem;
        height: 2rem;
    }
    .Middle .Middle_item{
        display: flex;
        margin-top: 30px;
        width: 6.9rem;
        height: 3.6rem;
    }
    .Middle .Middle_item .Middle_item_pi{
        font-size: .24rem;
        color: #999;
        margin-top: .18rem;


    }

    .Middle .Middle_item .Middle_item_pice{
        font-size: .24rem;
        font-weight: 700;
        color: #ffb02e;
    }
    .Middle .Middle_item .Middle_item_price{
        color: #ff2661;
        font-size: .36rem;
        margin-right: 4px;
        font-weight: 700;
    }
    .Middle .Middle_item .Middle_item_info{
        line-height: .6rem;
        margin-left: .6rem;

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
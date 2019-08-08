<template>
    <div>
        <div class="Middle">
            <div class="Middle_item" v-for="(item,index) in movieList">
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
    import {movie_Wanle_api} from '../../api/movie'
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

</style>
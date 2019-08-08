<template>
    <div class="movieWrapper">
        <div id="content">
        <div class="movie_menu">
            <ul class="movie_menu_switch">
                <router-link class="movie_menu_active" tag="li" to="../components/List">演唱会</router-link>
                <router-link tag="li" to="../components/Vocal">话剧表演</router-link>
            </ul>
        </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Movie",
    }
</script>
<style>
    #content .movie_menu .movie_menu_switch{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #content .movie_menu .movie_menu_switch li{
        height: 100%;
        line-height: .9rem;
        padding: 0 .2rem;
        font-size: .3rem;
    }

    #content .movie_menu .movie_menu_switch .router-link-active{
        color: #ef4238;
        border-bottom:2px #ef4238 solid
    }


</style>
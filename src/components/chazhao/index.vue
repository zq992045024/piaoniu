<template>
  <div class="movie_menu">
    <router-link to="/cityList" class="movie_menu_city" tag="div" >
      <span>{{$store.state.city.cityName}}</span>
      <i class="iconfont">&#xe638;</i>
    </router-link>
    <router-link class="inputs" to="/search" tag="div">
      <i class="iconfont">&#xe601;</i><span>搜索明星、演出、场馆</span>
    </router-link>
    <router-link class="mine" to="/mine">
        <i class="iconfont">&#xe507;</i>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "SearchCom",
  created() {},
  methods: {
    
  }
};
</script>


<style>
.movie_menu  {
  height: 0.88rem;
  width: 100%;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
}
.movie_menu .movie_menu_city span {
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.3rem;
}

.movie_menu .movie_menu_city i {
  font-size: 0.3rem;
}
.movie_menu .movie_menu_city {
  width: 1.5rem;
  font-weight: 500;
  font-size: 14px;
  padding-left: 16px;
  padding-right: 12px;
  margin-right: 9px;
}

.movie_menu .inputs {
    background: #f5f5f5;
    height: .6rem;
    margin-top: .1rem   ;
    width: 3.5rem;
    font-size: .3rem;
    border-radius: .3rem;
    border: none;
    flex:1
}
.inputs i{
    line-height: .6rem;
    font-size: .3rem;
    margin-left: .3rem;
}
.inputs span{
    color: #999;
    font-size: .25rem;
    line-height: .6rem ;
    margin-left: .25rem;
}
.mine{
  overflow:hidden;
  margin-top: .1rem;

}
.mine i{
    font-size: .5rem;
    margin-left: .3rem;
    padding: .8rem .2rem;
}
</style>
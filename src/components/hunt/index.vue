<template>
  <div class="hunt">
    <div class="goback">
      <p>返回</p>
    </div>
    <router-link class="inputs" to="/search" tag="div">
      <i class="iconfont">&#xe601;</i>
      <span>搜索明星、演出、场馆</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Hunt"
};
</script>
<style>
.hunt {
  height: 0.6rem;
  width: 100%;
}
.goback {
  width: 1rem;
  height: 0.6rem;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
  float: left;
  font-size: 0.3rem;
  line-height: 0.6rem;
  text-align: center;
}

.inputs {
  background: #f5f5f5;
  height: 0.6rem;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
  width: 6rem;
  font-size: 0.3rem;
  border: none;
  float: right;
}
.inputs i {
  line-height: 0.6rem;
  font-size: 0.3rem;
  margin-left: 0.3rem;
  color: #fff;
  font-size: 0.4rem;
}
.inputs span {
  font-size: 0.25rem;
  line-height: 0.6rem;
  margin-left: 0.25rem;
  color: #666666;
}
</style>
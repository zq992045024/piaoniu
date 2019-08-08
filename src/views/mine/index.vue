<template>
<<<<<<< fdf4a421fa34f85b04c9801f732c5dbac61f4d02
    <div>
        <h2>{{$store.state.user.username}}</h2>


    <button @click="outLogin">退出登录</button>
    </div>
=======
  <div class="y_box">
    <div class="y_top">
      <span>&lt;</span>
      <p>我的</p>
    </div>
    <div class="y_head">
      <div class="y_head_a">
        <div class="photo">
          <div class="photo_i"></div>
          <p>登录</p>
        </div>
        <div class="y_main">
          <p>个人主页&gt;</p>
        </div>
      </div>
      <ul class="y_head_b">
        <li>
          <span>0</span>
          <p>想看</p>
        </li>
        <li>
          <span>0</span>
          <p>评论</p>
        </li>
        <li>
          <span>0</span>
          <p>关注</p>
        </li>
        <li>
          <span>0</span>
          <p>粉丝</p>
        </li>
      </ul>
    </div>
    <div class="y_order_i">
      <p>我的订单</p>
      <span>查看全部订单 &gt;</span>
    </div>
    <ul class="y_order">
      <li>
        <div></div>
        <span>待付款</span>
      </li>
      <li>
        <div></div>
        <span>待发货</span>
      </li>
      <li>
        <div></div>
        <span>待收货</span>
      </li>
    </ul>
    <ul class="y_welfare">
      <li>
        <span>0</span>
        <p>优惠劵</p>
      </li>
      <li>
        <span>0</span>
        <p>礼品卡</p>
      </li>
    </ul>
    <div class="y_welfare_i">
      <p>我的福利</p>
    </div>
    <ul class="y_activity">
      <li>
        <div></div>
        <div>
          <p>邀请好友</p>
          <span>返10元现金</span>
        </div>
      </li>
      <li>
        <div></div>
        <div>
          <p>圈圈俱乐部</p>
          <span>达人专属奖励</span>
        </div>
      </li>
    </ul>
    <ul class="y_message">
      <li>
        <p>地址管理</p>
        <span>&gt;</span>
      </li>
      <li>
        <p>帮助与客服</p>
        <span>&gt;</span>
      </li>
      <li>
        <p>卖家招募</p>
        <span>&gt;</span>
      </li>
    </ul>
    <div class="y_tail">
      <div class="y_tail_box">
        <ul>
          <li>关于我们</li>
          <span>丨</span>
          <li>联系我们</li>
        </ul>
        <p>Copyright©2015-2018</p>
      </div>
    </div>
  </div>
>>>>>>> yk
</template>

<script>
export default {
<<<<<<< fdf4a421fa34f85b04c9801f732c5dbac61f4d02
    created(){
    },
    methods:{
        outLogin(){
            sessionStorage.clear();
            this.$router.go('/login')
        }
    }
}
=======
    
};
>>>>>>> yk
</script>

<style>
.y_box {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 0 1rem 0;
}
.y_top {
  width: 100%;
  height: 0.8rem;
  display: flex;
  text-align: center;
  line-height: 0.8rem;
  color: #ff326b;
  font-weight: 900;
}
.y_top span {
  width: 10%;
  font-size: 0.5rem;
}
.y_top p {
  width: 100%;
  font-size: 0.3rem;
}
.y_head {
  width: 100%;
  height: 3.4rem;
  background: #ff346c;
}
.y_head_a {
  width: 100%;
  height: 2rem;
}
.photo {
  float: left;
  width: 2.5rem;
  height: 2rem;
}
.photo .photo_i {
  margin-top: 0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  background: #fff;
  float: left;
  margin-left: 0.25rem;
}
.photo p {
  font-weight: 900;
  margin-top: 0.5rem;
  width: 1rem;
  height: 1rem;
  font-size: 0.4rem;
  color: #fff;
  float: right;
  line-height: 1rem;
  text-align: center;
}
.y_main {
  margin-top: 0.7rem;
  float: right;
  width: 1.7rem;
  height: 0.6rem;
  background: #d44b88;
  line-height: 0.6rem;
  font-size: 0.25rem;
  color: #fff;
  text-align: center;
  border-radius: 0.6rem 0rem 0rem 0.6rem;
}
.y_head_b {
  margin-top: 0.6rem;
  height: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 0.3rem;
  font-weight: 900;
  color: #fff;
}
.y_order_i {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid #f8f8f8;
}
.y_order_i p {
  width: 2rem;
  height: 1rem;
  line-height: 1rem;
  float: left;
  text-align: center;
  font-size: 0.32rem;
  font-weight: 900;
}
.y_order_i span {
  width: 2.5rem;
  height: 1rem;
  line-height: 1rem;
  float: right;
  text-align: center;
  font-size: 0.27rem;
  font-weight: 900;
  color: #989898;
}
.y_order {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  border-bottom: 0.2rem solid #f6f7f9;
}
.y_order li {
  margin-top: 0.25rem;
  width: 0.8rem;
  text-align: center;
}
.y_order li div {
  margin: auto;
  width: 0.45rem;
  height: 0.45rem;
}
.y_order li:nth-child(1) div {
  background-image: url(//static.piaoniu.com/m/static/img/order-topay.4cf62ce.png);
}
.y_order li:nth-child(2) div {
  background-image: url(//static.piaoniu.com/m/static/img/order-tosend.20248ed.png);
}
.y_order li:nth-child(3) div {
  background-image: url(//static.piaoniu.com/m/static/img/order-toreceive.d23cc4e.png);
}
.y_order li span {
  width: 0.6rem;
  height: 0.5rem;
  line-height: 0.5rem;
  color: #fc458a;
}
.y_welfare_i {
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid #f8f8f8;
}
.y_welfare_i p {
  width: 2rem;
  height: 1rem;
  line-height: 1rem;
  float: left;
  text-align: center;
  font-size: 0.32rem;
  font-weight: 900;
}
.y_welfare {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  border-bottom: 0.2rem solid #f6f7f9;
}
.y_welfare li {
  margin-top: 0.25rem;
  width: 0.8rem;
  text-align: center;
  line-height: 0.5rem;
  color: #6e6e6e;
  font-weight: 900;
}

.y_activity {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  border-bottom: 0.2rem solid #f6f7f9;
}
.y_activity li {
  margin-top: 0.5rem;
  width: 3rem;
  height: 1rem;
  text-align: center;
}
.y_activity li div:nth-child(1) {
  width: 0.95rem;
  height: 0.95rem;
  float: left;
  border-radius: 1rem;
}
.y_activity li:nth-child(1) div:nth-child(1) {
  background-image: url(//static.piaoniu.com/m/static/img/icon-redpackage.e078ab8.png);
}
.y_activity li:nth-child(2) div:nth-child(1) {
  background-image: url(//static.piaoniu.com/m/static/img/icon-club.959250b.png);
}
.y_activity li div:nth-child(2) {
  width: 2rem;
  height: 1rem;
  float: right;
}
.y_activity li div:nth-child(2) p {
  width: 2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.3rem;
  font-weight: 900;
}
.y_activity li div:nth-child(2) span {
  width: 2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.2rem;
  font-weight: 900;
  color: #989898;
}
.y_message {
  width: 100%;
  height: 3rem;
}
.y_message li {
  width: 100%;
  height: 1rem;
  border-bottom: 0.01rem solid #f9f9f9;
}
.y_message li p {
  margin-left: 0.4rem;
  width: 2rem;
  height: 1rem;
  line-height: 1rem;
  float: left;
  font-size: 0.3rem;
  font-weight: 900;
}
.y_message li span {
  width: 0.5rem;
  height: 1rem;
  line-height: 1rem;
  float: right;
  font-size: 0.3rem;
  font-weight: 900;
}
.y_tail {
  width: 100%;
  height: 1.5rem;
  background: #f3f4f6;
  display: flex;
  justify-content: space-around;
}
.y_tail_box {
  margin-top: 0.9rem;
  width: 2.3rem;
  height: 1rem;
  text-align: center;
  color: #bcbdbd;
}
.y_tail_box ul {
  display: flex;
  justify-content: space-around;
}
</style>


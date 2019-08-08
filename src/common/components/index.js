import Header from "components/header"
import Search from "components/chazhao"
import Banner from "common/banner"
import Main from "components/main"
import BScroll from "lib/bscroll"
import Back from "components/backout"

import buyTcik from "common/buyTick"
import Vue from "vue"
Vue.component(Header.name,Header)
Vue.component(Search.name,Search)
Vue.component(Main.name,Main)
Vue.component(Banner.name,Banner)
Vue.component(Back.name,Back)
Vue.component(buyTcik.name,buyTcik)
Vue.component(BScroll.name,BScroll)
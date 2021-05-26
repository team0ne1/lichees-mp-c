import Vue from 'vue'
import App from './App'
import store from 'store.js'
import tTabbar from "@/components/t-tabbar.vue"
import tTopbar from "@/components/t-topbar.vue"
import tCard from "@/components/t-card.vue"
import tCard2 from "@/components/t-card2.vue"
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.component('tTabbar', tTabbar)
Vue.component('tTopbar', tTopbar)
Vue.component('tCard', tCard)
Vue.component('tCard2', tCard2)
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()

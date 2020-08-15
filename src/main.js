import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './pages/Home'
import Adhikara from './pages/Adhikara'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue()
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/adhikara', component: Adhikara },
  { path: '/gallery', component: Gallery },
  { path: '/faq', component: FAQ },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

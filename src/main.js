import Vue from 'vue'
import App from './App.vue'
import Time  from './components/Time.vue'
import VueRouter from 'vue-router'
import router from './routes'


//Глобальный компонент
Vue.component('get_time', Time)

// Vue Router
Vue.use(VueRouter)



Vue.config.productionTip = false
export const eventBus = new Vue()



new Vue({
  render: h => h(App),
  router
}).$mount('#app')

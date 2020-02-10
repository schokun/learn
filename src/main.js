import Vue from 'vue'
import App from './App.vue'
import Time  from './components/Time.vue'


//Глобальный компонент
Vue.component('get_time', Time)



Vue.config.productionTip = false
export const eventBus = new Vue()



new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
// import Time  from './components/Time.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'



// //Глобальный компонент
// Vue.component('get_time', Time)

// Vue Router
Vue.use(VueRouter)

//filter
Vue.filter('readMore',  (str, length, suffix) => str.substring(0, length) + suffix);
Vue.filter('toUan' , val => Math.ceil(val * 24.4));


Vue.config.productionTip = false;

//шина событий
export const eventBus = new Vue();



new Vue({
  render: h => h(App),
  router, store
}).$mount('#app')

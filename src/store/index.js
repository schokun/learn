import Vue from 'vue'
import Vuex from 'vuex'
import Car from './Cars'
import Local from './LocalStorage'


Vue.use(Vuex);

export default new Vuex.Store({
    modules:{Car , Local}
})
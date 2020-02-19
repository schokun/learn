import VueRouter from 'vue-router'
//car
import Home    from './components/cars/Cars'
import CarInfo from './components/cars/CarInfo'
import favorites from './components/cars/favorites'
//error
import Error   from './components/Error/404'


export default new VueRouter({
    routes: [
        {
            path: '', // http://localhost:8080/
            component: Home,
            name: 'Home'
        },
        {
          path: '/carInfo/:id/',
          component: CarInfo,
          name: 'CarInfo',
          props: true
        },
        {
          path: '/favorite',
          component: favorites,
        },
        {
            path: '*',
            component: Error
        },
    ],
    mode: 'history'
   
})
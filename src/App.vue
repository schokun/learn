<template>
    <div id="app">
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <router-link to="/">
                    <img src="https://freeiconshop.com/wp-content/uploads/edd/car-flat.png" alt="" class="w-10">
                </router-link>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                        Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <router-link
                            to='/'
                            class="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 text-2xl"
                            exact
                            tag="a"
                            active-class="font-bold text-white">
                        Home
                    </router-link>
                    <router-link
                            to='/favorite'
                            class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 text-2xl"
                            exact
                            tag="a"
                            active-class="font-bold text-white"
                    >
                        Избранное
                    </router-link>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>


    //шина событий
    import {eventBus} from "./main"

    export default {
        name: 'app',
        data() {
            return {
                stat: {
                    msg: null,
                    bacground: null
                },
                showStat: false,
            }
        },
        created() {
            eventBus.$on('show-status', (stat) => {
                this.stat = stat;
                this.showStat = true
            })
            this.$store.commit('fistAuth')
        }
    }
</script>

<style src="./assets/css/tailwind.css">

</style>
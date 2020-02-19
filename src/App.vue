<template>
    <div id="app">
        <router-link to='/' active-class="font-bold mr-5" exact>Home</router-link>
        <router-link to='/favorite' active-class="font-bold ml-5">Избранное</router-link>
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
                user: {
                    name: 'John',
                    surname: 'Doe'
                },
                stat: {
                    msg: null,
                    bacground: null
                },
                news:
                    {
                        title: '',
                        text: ''
                    },
                showStat: false,
                copy: 'Все права защищены',

            }
        },
        created() {
            eventBus.$on('show-status', (stat) => {
                this.stat = stat;
                this.showStat = true
            })
        }
    }
</script>

<style src="./assets/css/tailwind.css">

</style>
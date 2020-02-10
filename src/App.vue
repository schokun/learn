<template>
    <div>
        <div id="app">
            <!--Глобальный компонент-->
            <get_time></get_time>
            <!--article-->
            <Article :user="user" :news="news"></Article>
            <Status :bacground="stat.bacground" :msg="stat.msg" v-if="showStat" @cancel="showStat = false"></Status>
        </div>

        <!--footer-->
        <myFooter>
            <h1>FOOTER</h1>
            <div class="logo"><strong>logo</strong></div>

            <div slot="copy">
                <div class="copy"> {{ copy }}</div>
            </div>
        </myFooter>

    </div>
</template>

<script>


    import Article from './components/news/Article.vue'
    import Status from './components/status/StatusList.vue'
    import myFooter from './Footer.vue'

    //шина событий
    import {eventBus} from "./main"

    export default {
        name: 'app',
        components: {
            Article, Status, myFooter,
        },
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

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
        min-height: 730px;


    }

</style>
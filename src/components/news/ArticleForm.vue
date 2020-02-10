<template>

    <div id="article-form">
        <div class="title">
            <label for=""> Загаловок Новости </label>
            <input type="text" v-model="news.title">
        </div>

        <div class="text">
            <label for="">Содержание новости</label>
            <textarea rows="10" cols="50" v-model="news.text">  </textarea>
        </div>

        <div>
            <button @click="edit">Опубликовать</button>
        </div>
    </div>

</template>


<script>
    import {eventBus} from "../../main"
    export default {
        name: 'article-form',
        props: {},
        data() {
            return {
                news: []
            }
        },
        methods: {
            edit() {
                let obj = {title: this.news.title, text: this.news.text};
                if (this.news.title && this.news.text) {
                    this.news.push(obj)
                    let newObj = this.news;
                    this.$emit('edit-arct', newObj);
                    eventBus.$emit('show-status', {
                        'msg' : 'Новость успешна опубликована',
                        'bacground': 'ok'
                    })
                } else {
                    eventBus.$emit('show-status', {
                        'msg' : 'Новсть не опубликована, все поля должны быть заполнены',
                        'bacground': 'err'
                    })
                }

            }
        }
    }

</script>


<style scoped>

    input {
        width: 375px;
    }

    label {
        display: block;
        margin: 10px 0;
        font-family: Arial;

    }

    button {
        margin-right: 10px;
        cursor: pointer;
    }

</style>
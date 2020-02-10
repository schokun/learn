<template>


    <div id="Article">
        <div>
            <ArticleForm @edit-arct="news = $event"></ArticleForm>
        </div>
        <div class="art-wrap">
            <div class="wrap" v-for="(ind, key) in news" :key="key">
                <div>Названте новости - {{ind.title}}</div>
                <hr>
                <div>Текст: {{ ind.text }}</div>
                <hr>
                <div>Опубликовал: {{name}} {{surname}}</div>
                <hr>
                Дата публицации: <get_time></get_time>
            </div>
        </div>
    </div>


</template>


<script>
    import ArticleForm from './ArticleForm.vue'


    export default {
        name: 'Article',
        components: {ArticleForm},
        props: {
            user: {
                type: Object,
                required: false
            },
        },
        data() {
            return {
                name: '',
                surname: '',
                news: []
            }

        },
        created() {
            this.name = this.user.name;
            this.surname = this.user.surname;
        }
    }

</script>


<style scoped>
    #Article {
        display: flex;
        flex-wrap: wrap;

    }

    .wrap {
        margin: 10px;
        padding: 10px;
        border: 1px solid;
        width: 500px;
        margin-left: 292px;
    }

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
    }

</style>
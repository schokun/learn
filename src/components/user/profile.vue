<template>
    <div id='user-profile'> 
        <h1>User Profile</h1>
        <p><strong>Name:</strong>{{user.name}}</p>
        <p><strong>Surname:</strong>{{user.surname}}</p>

        <div v-if="!showForm">
            <button @click="showForm=true">Edit</button>
        </div>
        <div v-else>
            <profile-Form :user='user' @save-user='saveUser($event)' @cancel='showForm= false'></profile-Form>
        </div>

    </div>
</template>

<script>
    import profileForm from './profileForm.vue';

    export default {
        components:{profileForm},
        props:{
            user:{
                type: Object,
                required: true
            }
        },
        name: 'profile',
        data(){
            return{
                showForm: false
            }
        },
        methods:{
            saveUser(user){
                this.$emit('save-user', user)
            }
        }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
      }
    a {
      color: #42b983;
    }
</style>

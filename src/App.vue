<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1> i am created Vue.js</h1>
    <HelloWorld></HelloWorld>
    <Profile :user="user" @save-user="user = $event"></Profile>
  </div>
</template>

<script>
import Profile from './components/user/profile.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, Profile
  },
  data(){
    return {
         user: {

          name: 'John',
          surname: 'Doe'

        }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
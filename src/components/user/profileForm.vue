<template>
    <div id='profile-Form'> 
        <div>
            <label for='name'></label>
            <input  type="text" id='name' v-model='name'>
        </div>
        <div>
            <label for='surname'></label>
            <input type="text" id='surname' v-model="surname">
        </div>
        <div>
            <button @click='save'>Save</button>
            <button @click='cancel'>Cancel</button>
        </div>
    </div>
</template>

<script>
  export default {
    props:{
            user:{
                type: Object,
                required: true
            }
        },
    name: 'profileForm',
    data(){
        return{
            name:'',
            surname:''
        }
    },
    methods:{
        save(){
            let name=this.name
            let surname=this.surname

            this.$emit('save-user',{name,surname})
            this.cancel()
        },
        cancel(){
             this.$emit('cancel')
        }
    },
    created(){
        this.name=this.user.name,
        this.surname=this.user.surname
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

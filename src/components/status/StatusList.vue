<template>
    <div id="status">
        <div :style="`background-color: ${bg}`">
            {{ msg }}
        </div>
        <button @click="cancel">cancel</button>
    </div>
</template>

<script>
    export  default {
        name: 'status-list',
        props: [ 'bacground' , 'msg' ],
        data(){
            return{
                bacgrounds: {
                    'ok' : 'green',
                    'err': 'red'
                }
            }
        },
        methods: {
            cancel(){
                this.$emit('cancel')
            }
        },
        computed: {
            bg(){
                return this.bacgrounds[this.bacground]
            }
        }
    }
</script>


<style scoped>
#status{
    display: flex;
    margin: 10px;
    position: absolute;
    top: 360px;
    left: 0;
}
#status div {
    background-color: green;
    padding: 10px;
    font-weight: bold;
    border-radius: 5px;

}
    button{
        border: none;
        padding: 14px 10px;
        cursor: pointer;
    }
</style>
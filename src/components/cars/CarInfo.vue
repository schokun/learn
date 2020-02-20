<template>
    <div id="car-info">
        тут данные по этой тачке
        <button
            @click="backhome"
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
            Back Home
        </button>

        <div>
            {{ CarInfoById }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CarInfo',


        data() {
            return {carId: this.$route.params.id,}
        },
        computed: {
            CarInfoById() {
                return this.$store.getters.CarInfo(this.carId)
            }
        },
        watch: {
            $route(to) {
                this.carId = to.params['id']
            }
        },
        methods: {
            backhome() {
                this.$router.push({name: 'Home'})
            }
        },


    }
</script>

<style>

</style>
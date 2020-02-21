<template>
    <div id="car-info" class="p-2">


        <button
                @click="backhome"
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-2"
        >
            Back Home
        </button>

        <div>
            <div class="car-ifno" :key="item.id" v-for="item in CarInfoById">
                <div class="flex">

                    <div class="img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="desc-car  p-5 ml-5">
                        <div class="body">
                            <span class="text-gray-500 m-5">Тип кузова:</span> {{ item.body }}
                        </div>
                        <div class="power  mt-3">
                            <span class="text-gray-500 m-5">Двигатель</span> {{ item.power }}
                        </div>
                        <div class="box  mt-3">
                            <span class="text-gray-500 m-5">Коробка передач:</span> {{ item.box }}
                        </div>
                        <div class="year  mt-3">
                            <span class="text-gray-500 m-5">Год:</span> {{ item.year }}
                        </div>
                        <div class="fuel mt-3">
                           <span class="text-gray-500 m-5">Топливо:</span> {{ item.fuel }}
                        </div>
                        <div class="county mt-3">
                            <span class="text-gray-500 m-5">Страна производитель:</span> {{ item.county }}
                        </div>
                    </div>

                </div>
                <span class="block mt-2 text-base">Комментарий</span>
                <div class="desc border p-2 mt-2 text-2xl bg-gray-100">
                    {{ item.desc }}
                </div>
            </div>
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
            },

        },
        watch: {
            $route(to) {
                this.carId = to.params['id']
            }
        },
        methods: {
            backhome() {
                this.$router.push({name: 'Home'})
            },
        },


    }
</script>

<style scoped>
.car-ifno .img{
    width: 480px;
}
.car-ifno img {
    width: 100%;
}
</style>
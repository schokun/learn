<template>
    <div id="fav">
        <div class="fav-wrap" v-if="isTrue">
            <div class="flex p-2 flex-wrap ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg cars-wrap m-5" v-for=" (car, ind) in FromLocal"
                     :key="ind">
                    <img class="w-full"
                         :src="car.img"
                         alt="Sunset in the mountains">
                    <div class="px-6 py-4 text__box">
                        <div class="font-bold text-xl mb-2">{{ car.name }} - {{ car.year }}</div>
                        <p class="text-gray-700 text-base">
                            {{car.desc | readMore(100, '.....')}}
                        </p>
                        <div class="mt-5 flex items-center">
                    <span class="price text-green-400 font-bold text-2xl">
                       Цена -  {{car.price}} $
                    </span>
                            <span class="price text-gray-400 font-bold   ml-2">
                        ({{car.price|toUan}}грн.)
                    </span>
                        </div>
                    </div>
                    <div class="px-6 py-4 flex justify-between">
                        <div class="more-info">
                            <router-link
                                    :to="{name: 'CarInfo', params: {id: car.id}}"
                                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                    active-class="font-bold "
                                    tag="button"
                            >
                                Подробнее
                            </router-link>
                        </div>
                        <div class="addLocal" v-if="car.status && vf(car.id)">
                            <button
                                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
                                    active-class="font-bold "
                                    @click="addTolocal(car.id) ,  car.status = false "
                            >
                                В избранное
                            </button>
                        </div>
                        <div class="delLocal" v-else>
                            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                    @click="car.status = true , DelFromLocal(car.id)"


                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                <p class="font-bold">Избранное пусто</p>
                <p class="text-sm">Добавьте хотя бы один автомобиль.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'fav',
        methods: {
            vf(id) {
                if (this.FromLocal) {
                    return Boolean(!this.FromLocal.find(cars => cars.id == id))
                }
            },
            DelFromLocal(el) {
                this.$store.commit('DelFromLocal', el)
            },
        },
        computed: {
            isTrue() {
                if (this.FromLocal.length > 0) {
                    return true
                }

                return false
            },
            ...mapGetters([
                'FromLocal'
            ])
        },
        created() {
            this.$store.commit('FromLocal')
        }
    }
</script>

<style>
    .fav-wrap {
        max-width: 1590px;
        margin: auto;
    }
</style>
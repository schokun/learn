<template>
    <div id="car">
        <div class="wrapper p-2 flex">
            <CarsForm></CarsForm>
            <div class="car_wrap flex flex-wrap justify-center w-2/3" v-if="isTrue">
                <div
                        class="max-w-sm rounded overflow-hidden shadow-lg cars-wrap m-5 mt-1"
                        v-for=" (car, ind) in result"
                        :key="ind"
                >
                    <img
                            class="w-full"
                            :src="car.img"
                            alt="Sunset in the mountains"
                    >
                    <div class="px-6 py-4 text__box">
                        <div class="font-bold text-xl mb-2 car-title">{{ car.marka }} - {{ car.year }}</div>
                        <p class="text-gray-700 text-base text-desc">
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
            <div v-else class="alert">
                <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                    <p>По данным параметрам нет автомобилей.</p>
                </div>
            </div>
        </div>
        <div class="pagination flex justify-center" v-if="isTrue">
            <div class="prev" @click="pagination('prev')">
                <img src="https://s1.iconbird.com/ico/0612/MustHave/w256h2561339195829Next256x256.png" alt="">
            </div>
            <div class="next" @click="pagination('next')">
                <img src="https://s1.iconbird.com/ico/0612/MustHave/w256h2561339195829Next256x256.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import CarsForm from './CarsForm.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'car',
        components: {CarsForm},

        data() {
            return {
                paginationStart: 0,
                paginationEnd: 3,
            }
        },
        computed: {
            isTrue() {
                if (this.GetResult.length > 0) {
                    return true
                }
                return false
            },
            result() {
                return this.GetResult.slice(this.paginationStart, this.paginationEnd)
            },
            FromLocal() {
                return this.FromLocal
            },
            ...mapGetters([
                'GetCars',
                'GetResult',
                'FromLocal'
            ]),
        },
        methods: {
            pagination(step) {
                if (step == 'prev') {
                    this.paginationStart -= 3;
                    this.paginationEnd -= 3;
                }
                if (step == 'next') {
                    this.paginationStart += 3;
                    this.paginationEnd += 3;
                }
            },
            vf(id) {
                if (this.FromLocal) {
                    return Boolean(!this.FromLocal.find(cars => cars.id == id))
                }
            },
            getCars() {
                this.$store.commit('CarFilter')
            },
            addTolocal(el) {
                this.$store.commit('addTolocal', {el, res: this.result, cars: this.GetCars})
                this.$store.commit('FromLocal', {el, res: this.result, cars: this.GetCars})
            },
            DelFromLocal(el) {
                this.$store.commit('DelFromLocal', el)
            }
        },
        watch: {
            paginationStart() {
                if (this.paginationStart >= this.GetResult.length) {
                    this.paginationStart = 0
                    this.paginationEnd = 3
                } else if (this.paginationStart < 0) {
                    this.paginationStart = 0
                    this.paginationEnd = 3
                }
            },
            GetResult() {
                if (this.GetResult.length <= this.paginationStart) {
                    this.paginationStart = 0
                    this.paginationEnd = 3
                }
            }

        },
        created() {
            this.getCars()
            this.$store.commit('FromLocal')
        }
    }
</script>


<style>
    .next, .prev {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;
    }

    .text-desc {
        min-height: 100px!important;
    }

    .text__box {
        min-height: 260px;
    }

    .cars-wrap img {
        min-height: 251px;
        max-height: 251px;
    }

    .prev img {
        transform: rotate(180deg);
    }

    .car-title {
        min-height: 60px;
    }

    .next img:hover, .prev img:hover {
        filter: drop-shadow(2px 4px 6px black);
    }

    .addLocal {
        margin-left: 10px;
    }


    .cars-wrap {
        max-width: 350px;
    }
    .alert{
        width: 1340px;
        margin: auto;
    }

</style>
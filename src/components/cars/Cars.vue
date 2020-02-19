<template>
    <div id="car">
        <CarsForm @car-params=" params = $event "></CarsForm>
        <div class="carWrap">
            <div class="carItem" v-for=" (car, ind) in newArray" :key="ind">
                <div class="title">
                    {{ car.name }}
                    <hr>
                </div>
                <div class="year">
                    {{ car.year }}
                    <hr>
                </div>
                <div class="county">
                    {{ car.county }}
                </div>

                <div class="more-info">
                    <router-link :to="{
                                      name: 'CarInfo',
                                      params: {id: car.id, car: car}
                                    }"
                                 class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                 active-class="font-bold ">
                        Подробнее</router-link>
                </div>

            </div>
        </div>
        {{ errMes }}

        <div class="pagination">

            <div class="prev" @click="pagePrev">prev</div>
            <div class="next" @click="pageNext">next</div>

        </div>
    </div>
</template>

<script>
    import CarsForm from './CarsForm.vue'

    export default {
        name: 'car',
        components: {CarsForm},
        data() {
            return {
                cars: [
                    {
                        id: 1,
                        name: 'Audi',
                        year: '2019',
                        county: 'Германия'
                    },
                    {
                        id: 2,
                        name: 'Vaz',
                        year: '2010',
                        county: 'Украина'
                    },
                    {
                        id: 3,
                        name: 'Vaz',
                        year: '2010',
                        county: 'Украина'
                    },
                    {
                        id: 4,
                        name: 'Mers',
                        year: '2012',
                        county: 'Украина'
                    },
                    {
                        id: 5,
                        name: 'Bent',
                        year: '2012',
                        county: 'xz'
                    },
                    {
                        id: 1,
                        name: 'Audi',
                        year: '2019',
                        county: 'Германия'
                    },
                    {
                        id: 2,
                        name: 'Vaz',
                        year: '2010',
                        county: 'Украина'
                    },
                    {
                        id: 3,
                        name: 'Vaz',
                        year: '2010',
                        county: 'Украина'
                    },
                    {
                        id: 4,
                        name: 'Mers',
                        year: '2012',
                        county: 'Украина'
                    },
                    {
                        id: 1,
                        name: 'Audi',
                        year: '2019',
                        county: 'Германия'
                    },
                    {
                        id: 2,
                        name: 'Vaz',
                        year: '2010',
                        county: 'Украина'
                    },
                    {
                        id: 3,
                        name: 'Vaz',
                        year: '2010',
                        county: 'Украина'
                    },
                    {
                        id: 4,
                        name: 'Mers',
                        year: '2012',
                        county: 'Украина'
                    },
                ],
                status: false,
                result: [],
                errMes: '',
                params: [
                    {
                        'name': '',
                        'county': '',
                        'year': ''
                    }
                ],
                paginationStart: 0,
                paginationEnd: 4

            }

        },

        watch: {
            paginationEnd(){
                if(this.paginationEnd > this.result.length){
                    this.paginationEnd = 4;
                    this.paginationStart = 0;
                }
            },
            'params.name'() {
                return this.CarFilter()
            },
            'params.county'() {
                return this.CarFilter()
            },
            'params.year'() {
                return this.CarFilter()
            }
        },
        computed: {
            newArray(){

                if(this.result.slice.length < 4) {

                    return this.result.slice(this.paginationStart , this.paginationEnd)
                }
                return this.result
          }
        },
        methods: {
            CarFilter() {
                this.paginationStart = 0;
                this.paginationEnd = 4;
                this.result = [];
                this.cars.forEach(car => {
                    this.status = true;
                    if (this.params.name) {
                        (car.name != this.params.name) ? this.status = false : console.log('Name True')
                    }
                    if (this.params.county) {
                        (car.county != this.params.county) ? this.status = false : console.log('county True')
                    }
                    if (this.params.year) {
                        (car.year != this.params.year) ? this.status = false : console.log('year True')
                    }

                    if (this.status) {
                        this.result.push(car)
                    }

                })

                if(this.result.length == 0){
                    this.errMes = 'Извините данного авто нет!!!!!!!!!!'
                } else  {
                    this.errMes = ''
                }
            },


            pageNext(){
                this.paginationStart += 4
                this.paginationEnd += 4
            },
            pagePrev(){
                if(this.paginationStart > 0 ) {
                    this.paginationStart -= 4
                    this.paginationEnd -= 4
                }
            }
        },
        created() {
            this.result = this.cars
            this.CarFilter()
        }
    }
</script>


<style scoped>
    .pagination{
        display: flex;
    }
    .next,.prev{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: burlywood;
        width: 40px;
        height: 40px;
        margin: 10px;
        cursor: pointer;
    }
    .more-info {
        margin-top: 20px;
    }
    .carWrap {
        display: flex;
        flex-wrap: wrap;
    }

    .carItem {
        width: 200px;
        height: 200px;
        border: 1px solid;
        margin: 5px;
        padding: 5px;
    }
</style>
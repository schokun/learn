<template>
    <div id="carform" class="w-1/6 border-r border-b pr-5">
        <div class="coutry mt-5">
            <label class=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Страна производитель</label>
            <select
                    class=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    name="#" v-model="params.county"
                    @change="carCounry"

            >
                <option value="">Не выбрано</option>
                <option value="Германия">Германия</option>
                <option value="Италия">Италия</option>
                <option value="Америка">Америка</option>
                <option value="Великобритания">Великобритания</option>
                <option value="Япония">Япония</option>
                <option value="Франция">Франция</option>
            </select>
        </div>

        <div class="name mt-5">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Марка</label>
            <select
                    name="#"
                    v-model="params.name"
                    @change="carCounry"
                    class=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
                <option value="" selected>Не выбрано</option>
                <option value="Audi">Audi</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Alfa Romeo">Alfa Romeo</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Ford">Ford</option>
                <option value="Aston Martin">Aston Martin</option>
                <option value="Nissan">Nissan</option>
                <option value="BMW">BMW</option>
            </select>
        </div>


        <div class="year mt-5">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Год</label>
            <select
                    name="#"
                    v-model="params.year"
                    @change="carCounry"
                    class=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
                <option value="" selected>Не выбрано</option>
                <option value="2008">2008</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2016">2016</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
            </select>
        </div>
        <div class="body mt-5">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Тип кузова</label>
            <select
                    class=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    v-model="params.body"
                    @change="carCounry"
            >
                <option value="" selected>Не выбрано</option>
                <option value="Кроссовер">Кроссовер</option>
                <option value="Внедорожник">Внедорожник</option>
                <option value="Седан">Седан</option>
                <option value="Купе">Купе</option>
                <option value="Универсал">Универсал</option>
            </select>
        </div>
        <div class="box mt-5">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Коробка</label>
            <select
                    class=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    v-model="params.box"
                    @change="carCounry"
            >
                <option value="" selected>Не выбрано</option>
                <option value="Типтроник">Типтроник</option>
                <option value="Автомат">Автомат</option>
                <option value="Механика">Механика</option>

            </select>
        </div>
        <div class="Fuel mt-5">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Топливо</label>
            <select
                    class=" appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    v-model="params.fuel"
                    @change="carCounry"
            >
                <option value="" selected>Не выбрано</option>
                <option value="Бензин">Бензин</option>
                <option value="Дизель">Дизель</option>

            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'carForm',
        data() {
            return {
                params: {
                    'county': '',
                    'name': '',
                    'year': '',
                    'fuel': '',
                    'body': '',
                    'box' : ''
                }
            }
        },

        methods: {
            carCounry() {
                this.$store.commit('params', this.params)
                this.$store.commit('CarFilter')
            }
        }
    }
</script>

<style scoped>
</style>
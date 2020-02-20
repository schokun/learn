<template>
    <div id="carform">
        <div class="coutry">
            <select name="#"  v-model="params.county" @change="carCounry">
                <option value="" selected>Не выбрано</option>
                <option value="Германия">Германия</option>
                <option value="Украина">Украина</option>
            </select>
        </div>

        <div class="name">
            <select name="#"  v-model="params.name" @change="carCounry">
                <option value="" selected >Не выбрано</option>
                <option value="Audi">Audi</option>
                <option value="Vaz">Vaz</option>
            </select>
        </div>


        <div class="year">
            <select name="#" v-model="params.year" @change="carCounry">
                <option value="" selected >Не выбрано</option>
                <option value="2010">2010</option>
                <option value="2019">2019</option>
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
                    'county' : '',
                    'name' : '',
                    'year' : ''
                }
            }
        },

        methods: {
            carCounry(){
                this.$store.commit('params', this.params )
                this.$store.commit('CarFilter')
            }
        }
    }
</script>

<style scoped>
#carform {
    display: flex;
}
</style>
<template>
    <div id="car-info">
        тут данные по этой тачке
		id -- {{ carId }}


        <button
                @click="backhome"
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Back Home
        </button>

		<div>
			{{ car }}

		</div>
    </div>
</template>

<script>
    export default {
        name: 'Car-Ifno',


        data() {
            return {
				carId: this.$route.params.id,
				car: this.$route.params['car'],
            }
        },
        watch: {
            $route(to) {
                this.carId = to.params['id'];
				this.car =  to.params['car'];
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
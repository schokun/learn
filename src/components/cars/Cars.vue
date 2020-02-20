<template>
	<div id="car" class="p-2">
		<CarsForm></CarsForm>

		<div class="carWrap">
			<div class="carItem" v-for=" (car, ind) in result" :key="ind">
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
					<router-link
					:to="{name: 'CarInfo', params: {id: car.id, car: car}}"
					class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
					active-class="font-bold "
					>
					Подробнее
				</router-link>
			</div>
			<div class="addLocal" v-if="car.status && vf(car.id)">
				<button
				class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5"
				active-class="font-bold "
				@click="addTolocal(car.id) ,  car.status = false "
				>
				В избранное
			</button>
		</div>

		<div class="delLocal" v-else>
			<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5"
			@click="car.status = true , DelFromLocal(car.id)"
			>

			Удалить
		</button>
	</div>

</div>
</div>
<!--        {{ errMes }}-->
<div class="pagination">
	<div class="prev" @click="pagination('prev')">
		<img src="https://s1.iconbird.com/ico/0612/MustHave/w256h2561339195829Next256x256.png" alt="">
	</div>
	<div class="next" @click="pagination('next')">
		<img src="https://s1.iconbird.com/ico/0612/MustHave/w256h2561339195829Next256x256.png" alt="">
	</div>
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
	<img class="w-full" src="https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/audi-q8__481663-620x415x70.jpg" alt="Sunset in the mountains">
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2">Audi Q8 - 2018г</div>
		<p class="text-base">
			<span class="price text-green-400 font-bold text-2xl">
				200$
			</span>
		</p>
	</div>
	<div class="px-6 py-4 flex">
		<div class="more-info">
			<router-link
			to="/"
			class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
			active-class="font-bold "
			tag="button"
			>
			Подробнее
		</router-link>
	</div>
	<div class="addLocal">
		<button
		class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
		active-class="font-bold "
		>
		В избранное
	</button>
</div>
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
			paginationEnd: 4,
		}
	},
	computed: {
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
				this.paginationStart -= 4;
				this.paginationEnd -= 4;
			}
			if (step == 'next') {
				this.paginationStart += 4;
				this.paginationEnd += 4;
			}
		},
		vf(id) {
			if(this.FromLocal){
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
		paginationStart(){
			if (this.paginationStart > this.GetResult.length){
				this.paginationStart = 0
				this.paginationEnd = 4
			} else  if (this.paginationStart < 0) {
				this.paginationStart = 0
				this.paginationEnd = 4
			}
		},

	},
	created() {
		this.getCars()
		this.$store.commit('FromLocal')
	}
}
</script>


<style scoped>
.pagination {
	display: flex;
}

.next, .prev {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	margin: 10px;
	cursor: pointer;
}
.prev img{
	transform: rotate(180deg);
}
.next img:hover, .prev img:hover{
	filter: drop-shadow(2px 4px 6px black);
}

.addLocal{
	margin-left: 10px;
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
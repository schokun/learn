export default {
    state: {
        cars: [
            {
                id: 1,
                name: 'Audi',
                year: '2019',
                county: 'Германия',
                status: true
            },
            {
                id: 2,
                name: 'Vaz',
                year: '2010',
                county: 'Украина',
                status: true
            },
            {
                id: 3,
                name: 'Vaz',
                year: '2010',
                county: 'Украина',
                status: true
            },
            {
                id: 4,
                name: 'Mers',
                year: '2012',
                county: 'Украина',
                status: true
            },
            {
                id: 5,
                name: 'Bent',
                year: '2012',
                county: 'xz',
                status: true
            },
            {
                id: 6,
                name: 'Audi',
                year: '2019',
                county: 'Германия',
                status: true
            },
            {
                id: 7,
                name: 'Vaz',
                year: '2010',
                county: 'Украина',
                status: true
            },
            {
                id: 8,
                name: 'Vaz',
                year: '2010',
                county: 'Украина',
                status: true
            },
            {
                id: 9,
                name: 'Mers',
                year: '2012',
                county: 'Украина',
                status: true
            },
            {
                id: 10,
                name: 'Audi',
                year: '2019',
                county: 'Германия',
                status: true
            },
            {
                id: 11,
                name: 'Vaz',
                year: '2010',
                county: 'Украина',
                status: true
            },
            {
                id: 12,
                name: 'Vaz',
                year: '2010',
                county: 'Украина',
                status: true
            },
            {
                id: 13,
                name: 'Mers',
                year: '2012',
                county: 'Украина',
                status: true
            }
        ],
        result : [],
        params: [],
        status: false
    },
    mutations: {
        params(state , payload){
            state.params = payload
        },

        CarFilter(state){
            state.result = [];
            state.cars.forEach(car => {
                state.status = true;
                if (state.params.name) {
                    (car.name != state.params.name) ? state.status = false : console.log('Name True')
                }
                if (state.params.county) {
                    (car.county != state.params.county) ? state.status = false : console.log('county True')
                }
                if (state.params.year) {
                    if(car.year != state.params.year) {
                        state.status = false
                    } else {
                        console.log(state.status)
                    }
                }
                if (state.status) {
                    state.result.push(car)
                }

            })
        },
    },
    getters: {
        GetCars(state){
            return state.cars
        },
        GetResult(state){
            return state.result
        },
        CarInfo: state => id =>{
            return state.cars.filter(car => car.id == id)
        }
    },
}
export default {

    state: {
        ArrLocal: [],
        FromLocal: []
    },

    mutations: {
        fistAuth(state){
            let check = localStorage.getItem('cars');
            if(!check){
                 localStorage.setItem('cars', JSON.stringify(state.ArrLocal))
            }
       },
       addTolocal(state, payload) {
        if(state.FromLocal){
            let item = payload.res.find(cars => cars.id == payload.el);

            if(!state.FromLocal.includes(item)){
                state.FromLocal.push(item)
            }

            localStorage.setItem('cars', JSON.stringify(state.FromLocal))
        } 
    },
    DelFromLocal(store, payload){
        let item = store.FromLocal.find(cars => cars.id == payload.el);
        localStorage.removeItem('cars' , item);
        store.FromLocal = store.FromLocal.filter( item => item.id !== payload);
        localStorage.setItem('cars' , JSON.stringify(store.FromLocal))

    },

    FromLocal(state) {
        let car = localStorage.getItem('cars');
        car = JSON.parse(car)
        state.FromLocal = car
    }
},
getters: {
    FromLocal(state) {
        return state.FromLocal
    }
}
}



import Vuex from 'vuex'
import Vue from 'vue-native-core'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        counter: 0
    },

    getters: {
        getCounter(state, getters){
            return state.counter;
        }
    },

    actions: {

    },

    mutations: {
        setCounter(state, counter){
            state.counter = counter;
        }
    },


})

export default store;
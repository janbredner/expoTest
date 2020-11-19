import Vuex from 'vuex'
import Vue from 'vue-native-core'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        counter: 0,
        items:[
            {
                id: 1,
                message: 'asdf'
            } ,
            {
                id: 2,
                message: 'fdsa'
            },
            {
                id: 3,
                message: 'vcxy'
            }
        ],
    },

    getters: {
        getCounter(state, getters){
            return state.counter;
        },
        getItems(state,getters){
            return state.items;
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
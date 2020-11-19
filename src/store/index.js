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
        user: null,
        loggedIn: false,
        token: '',
    },

    getters: {

        getCounter(state, getters){
            return state.counter;
        },

        getItems(state, getters){
            return state.items;
        },

        getUser(state, getters){
            return state.user;
        },

        isLoggedIn(state, getters){
            return state.loggedIn;
        },

        getToken(state, getters){
            return state.token;
        }
    },

    actions: {

    },

    mutations: {

        setCounter(state, counter){
            state.counter = counter;
        },

        setUser(state, user){
            state.user = user;
        },

        setToken(state, token){
          state.token = token;
        },

        login(state){
          state.loggedIn = true;
        },

        logout(state){
          state.loggedIn = false;
          state.user = null;
          state.token = '';
        }
    },


})

export default store;
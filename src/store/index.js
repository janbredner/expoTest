import Vuex from 'vuex'
import Vue from 'vue-native-core'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const url = 'http://172.17.100.2:8000/api/';

const store = new Vuex.Store({

    state: {
        counter: 0,
        user: null,
        loggedIn: false,
        token: '',
        email: '',
        password: '',
        cars:'',

        //verwendet zum Anzeigen von reinen Daten- wird später entfernt
        message: '',

        buttonTextColor: "#e6e6ff",
        buttonInnerColor: '#4b4b96',
        buttonOuterColor: '#32327d',

        textNormalColor: '#32327d',

        backgroundUpperColor: '#d2d2e6',
        backgroundLowerColor: '#a7a7cf',

        headerTextColor: '#32327d',
        headerUpperColor: '#d2d2e6',
        headerLowerColor: '#a7a7cf',
    },

    getters: {
        getMessage(state){
            return state.message;
        },

        getCars(state){
            return state.cars;
        },

        getPassword(state){
            return state.password;
        },

        getEmail(state){
            return state.email;
        },

        getCounter(state, getters){
            return state.counter;
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
        async loadCars({state, commit}){
            await axios
                //172.17.100.2 host IP address in Nox player
                .get(url + 'cars')
                .then(response => (commit('setCars', response.data)))
        },

        async logIn({state, commit}){
            await axios
                //172.17.100.2 host IP address in Nox player
                .post(url + 'login', {
                    email: state.email,
                    password: state.password
                })
                .then(response => {
                    let data = response.data;

                    if (Object.keys(data).includes("token")) {
                        store.commit('setUser', data.user);
                        store.commit('login');
                        store.commit('setToken', data.token);
                        store.commit('setMessage', '');
                    } else {
                        store.commit('setMessage', 'Falsche logIn Daten!');
                    }
                });
        },

        async logInFast() {
            await axios
                //172.17.100.2 host IP address in Nox player
                .post(url + 'login', {
                    email: 'jan@web.de',
                    password: 'jan'
                })
                .then(response => {
                    let data = response.data;

                    if (Object.keys(data).includes("token")) {
                        store.commit('setUser', data.user);
                        store.commit('login');
                        store.commit('setToken', data.token);
                        store.commit('setMessage', '');
                    } else {
                        store.commit('setMessage', 'Falsche logIn Daten!');
                    }
                });
        },

    },

    mutations: {

        setMessage(state, message){
            state.message = message;
        },

        setCars(state, cars){
            state.cars = cars;
        },

        setPassword(state,password){
            state.password = password;
        },

        setEmail(state,email){
            state.email = email;
        },

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
          state.user = [{
              name: '',
              email: '',
              address: '',
          }];
          state.token = '';
        }
    },
})

export default store;
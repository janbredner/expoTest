<template>
  <view>
    <view class="logInFormLine">
      <view class="logInFormText">
        <app-text text="e-mail:"></app-text>
      </view>
      <text-input class="logInFormInput" v-model="email" />
    </view>
    <view class="logInFormLine">
      <view class="logInFormText">
        <app-text text="password:"></app-text>
      </view>
      <text-input class="logInFormInput" v-model="password" />
    </view>
    <app-button title="Log-in"></app-button>
    <button title="real log-in atm" :on-press="logIn"></button>
    <counter></counter>
    <text>{{data}}</text>
  </view>
</template>

<script>

import Counter from "../components/Counter";
import AppText from "../components/base/Text";
import AppButton from "../components/base/Button";
import axios from "axios";
import store from '../store';


export default {
  components: {Counter, AppText, AppButton},

  data: function() {
    return {
      email: '',
      password: '',
      data: '',
    };
  },

  props: {
    navigation: {
      type: Object
    }
  },

  beforeMount() {
    if(store.getters.isLoggedIn){
      this.navigation.navigate('Home');
    }
  },

  computed:{
    user(){
      return store.getters.getUser;
    },

    token(){
      return store.getters.getToken;
    },

    loggedIn(){
      return store.getters.isLoggedIn;
    }
  },

  methods: {
    isLoggedIn: function(){
      return store.getters.isLoggedIn;
    },

    logIn: async function () {
      await axios
          //172.17.100.2 host IP address in Nox player
          .post('http://172.17.100.2:8000/api/login', {
            email: 'jan@web.de',
            password: 'jan'
          })
          .then(response => {
            this.data = response.data;

            if (Object.keys(this.data).includes("token")) {
              this.data = this.data;
              store.commit('setUser', this.data.user);
              store.commit('login');
              store.commit('setToken', this.data.token);
              this.navigation.navigate('Home');
              this.data = '';
            } else {
              this.data = 'Falsche logIn Daten!';
            }
          });
    },
  }
}
</script>

<style>
.logInFormText{
  width: 150px;
}

.logInFormInput{
  width: 150px;
  border-color: #3fc601;
  border-width: 1px;
}

.logInFormLine{
  flex-direction: row;
}

</style>

<template>
  <view>
    <text>{{user}}</text>
    <text>{{token}}</text>
    <text>{{loggedIn}}</text>
    <view v-if = "isLoggedIn()">
      <button title="real log-out atm" :on-press="logOut"></button>
    </view>
    <counter></counter>
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
    if(!store.getters.isLoggedIn){
      this.navigation.navigate('LogIn');
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

    logOut: function(){
      store.commit('logout');
      this.navigation.navigate('LogIn');
    }
  }
}
</script>

<style>

</style>

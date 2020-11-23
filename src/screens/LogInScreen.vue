<template>
  <view class="container">

    <background></background>

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
    <view class="logInButton">
      <app-button title="Log-in" :action="logIn"></app-button>
    </view>
    <button title="fast test logIn" :on-press="logInFast"></button>
    <text>{{message}}</text>
  </view>
</template>

<script>

import Counter from "../components/Counter";
import AppText from "../components/base/Text";
import AppButton from "../components/base/Button";
import Background from "../components/base/Background";
import store from '../store';

export default {
  components: {Counter, AppText, AppButton, Background},

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
    email:{
      get(){
        return store.getters.getEmail;
      },
      set(value){
        store.commit('setEmail', value)
      }
    },

    password:{
      get(){
        return store.getters.getPassword;
      },
      set(value){
        store.commit('setPassword', value)
      }
    },

    message(){ return store.getters.getMessage },
  },

  methods: {
    async logIn() {
        await store.dispatch('logIn');
        if(store.getters.isLoggedIn)
          this.navigation.navigate('Home');
    },

    async logInFast() {
      await store.dispatch('logInFast');
      if(store.getters.isLoggedIn)
        this.navigation.navigate('Home');
    },
  }
}
</script>

<style>
.container {
  height: 100%;
  align-items: center;
  justify-content: center;
}

.logInButton{
  width: 300px;
}

.logInFormText{
  width: 150px;
}

.logInFormInput{
  width: 150px;
  border-color: #32327d;
  border-width: 1px;
  margin: 2px;
  padding-left: 5px;
  color: #32327d;
}

.logInFormLine{
  flex-direction: row;
}

</style>

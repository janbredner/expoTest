<template>
  <view>
    <background></background>
    <app-text :text=user.name></app-text>
    <app-text :text=user.email></app-text>
    <app-text :text=user.address></app-text>
    <app-text :text=token></app-text>
    <view>
      <app-button title="Log-out" :action="logOut"></app-button>
    </view>
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
    if(!store.getters.isLoggedIn){
      this.navigation.navigate('LogIn');
    }
  },

  computed:{
    user(){ return store.getters.getUser; },

    token(){ return store.getters.getToken; },
  },

  methods: {

    logOut: function(){
      store.commit('logout');
      this.navigation.navigate('LogIn');
    }
  }
}
</script>

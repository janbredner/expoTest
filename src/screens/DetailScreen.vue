<template>
  <view class="test">
      <list-item></list-item>
      <contend></contend>
  </view>
</template>

<script>
import Contend from "../components/Contend";
import ListItem from "../components/ListItem";
import store from "../store";

export default {
  components: {Contend, ListItem},
  data: function() {
    return {

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

  methods: {
    goToHomeScreen() {
      this.navigation.navigate('Home');
    },
  }
}
</script>

<style>
.test{
  height: 100%;
}

</style>

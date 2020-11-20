<template>
  <view>
    <app-button title="count" :action=count></app-button>
    <app-text :text="'click counter: ' + counter"></app-text>
    <list-item></list-item>
  </view>
</template>

<script>
import AppText from "../components/base/Text";
import AppButton from "./base/Button";
import ListItem from "./ListItem";
import store from '../store';

export default {
  components: {ListItem, AppText, AppButton},
  data: function() {
    return {

    };
  },
  computed: {
    counter (){
      return store.getters.getCounter;
    }
  },

  methods: {
    count: function() {

      store.commit('setCounter', store.state.counter + 1);
    },
  }
}
</script>

<style>

</style>
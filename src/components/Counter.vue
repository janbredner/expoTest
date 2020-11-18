<template>
  <view class="container">
    <view class="button-container">
      <button
          :on-press="count"
          title="Count"
          color="red"
      />
    </view>
    <text class="text-color-primary">Anzahl gekickt: {{counter}}</text>
    <list-item></list-item>
  </view>
</template>

<script>

import ListItem from "./ListItem";
import store from '../store';

export default {
  components: {ListItem},
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

      store.commit('setCounter', store.state.counter + 1)
    },
  }
}
</script>

<style>

.container{
  margin-left: 50px;
  text-align: center;
}

.button-container{
  width: 75px;
}

.text-color-primary {
  border-radius: 25px;
  padding: 20px;
  margin: 5px;
  background-color: #a5eeee;
  color: #000037;
}
</style>
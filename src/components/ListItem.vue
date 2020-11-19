<template>
  <view>
    <app-text :text="'count backwards: ' + counter"></app-text>
  </view>
</template>

<script>

import AppText from "./base/Text";
import store from '../store';

export default{
  components:{AppText},
  computed: {
    counter(){
      return 100 - store.getters.getCounter;
    }
  }
}
</script>

<style>

</style>
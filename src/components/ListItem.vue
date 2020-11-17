<template>
  <view>
    <text>
      {{ counter }}
    </text>
  </view>
</template>

<script>
import store from '../store';

export default{
  computed: {
    counter(){
      return 100 - store.getters.getCounter;
    }
  }
}
</script>

<style>

</style>
<template>
  <view>
    <app-text text="My Vue Native App"></app-text>
    <app-text text="hi!"></app-text>
    <text-input
        :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
        v-model="text"
    />
    <app-text :text="text"></app-text>
    <counter></counter>
  </view>
</template>

<script>
import Counter from "./Counter";
import AppText from "./base/Text";

export default {
  components: {Counter, AppText},

  data: function() {
    return {
      text: '',
    };
  },
}
</script>
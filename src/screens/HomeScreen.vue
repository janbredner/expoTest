<template>
  <view class="mainstyle">
    <view>
      <text>This is the homescreen!</text>
      <button title="Go to detail screen" @press="goToDetailScreen"></button>
      <view class="text-color-primary">
        <list-item></list-item>
      </view>
      <view>
        <contend></contend>
      </view>
      <statusbar></statusbar>
    </view>
  </view>
</template>

<script>
import Statusbar from "../components/Statusbar";
import Contend from "../components/Contend";
import ListItem from "../components/ListItem";

export default {
  components: {Contend, Statusbar, ListItem},

  data: function() {
    return {

    };
  },

  props: {
    navigation: {
      type: Object
    }
  },

  methods: {
    goToDetailScreen() {
      this.navigation.navigate('Detail');
    }
  }
}
</script>

<style>

.mainstyle {
  background-color: #d0eea5;
}

.text-color-primary {
  border-radius: 25px;
  padding: 20px;
  margin: 5px;
  background-color: #a5eeee;
  color: #000037;
}
</style>

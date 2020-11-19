<template>
  <view>
    <view>
     <view class="text-color-primary">
        <list-item></list-item>
      </view>
      <view>
        <contend></contend>
      </view>
    </view>
  </view>
</template>

<script>
import Contend from "../components/Contend";
import ListItem from "../components/ListItem";

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

  methods: {
    goToHomeScreen() {
      this.navigation.navigate('Home');
    }
  }
}
</script>

<style>

.text-color-primary {
  border-radius: 25px;
  padding: 20px;
  margin: 5px;
  background-color: #d0eea5;
  color: #173700;
}
</style>

<template>
  <view>
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
    <app-button title="Log-in"></app-button>
    <button title="real log-in atm" :on-press="logIn"></button>
    <text>{{info}}</text>
    <text>{{data}}</text>
    <counter></counter>
  </view>
</template>

<script>

import Counter from "../components/Counter";
import AppText from "../components/base/Text";
import AppButton from "../components/base/Button";
import axios from "axios";
import store from '../store';


export default {
  components: {Counter, AppText, AppButton},

  data: function() {
    return {
      email: '',
      password: '',
      info: '',
      data: '',
    };
  },

  props: {
    navigation: {
      type: Object
    }
  },

  methods: {
    logIn: function(){
      axios
          //172.17.100.2 host IP address in Nox player
          .post('http://172.17.100.2:8000/api/login', {
            email: 'jan@web.de',
            password: 'jan'
          })
          .then(response => {
              this.data = response.data;

              if(Object.keys(this.data).includes("token")){
                this.info = this.data.token;
                this.data = this.data.user;
                store.commit('setUser', this.data);
                this.info = store.getters.getUser;
              }
              else{
                this.info = "failed";
              }
            })
    }
  }
}
</script>

<style>
.logInFormText{
  width: 150px;
}

.logInFormInput{
  width: 150px;
  border-color: #3fc601;
  border-width: 1px;
}

.logInFormLine{
  flex-direction: row;
}

</style>

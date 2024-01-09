<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

// axios
// import axios from "axios";

// service
import request from "../utils/request";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  created() {
    request({
      url: process.env.VUE_APP_BASE_API + "/",
      method: "GET",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    request({
      url: process.env.VUE_APP_BASE_API1 + "/",
      method: "GET",
    })
      .then((response) => {
        console.log(response, "4000");
      })
      .catch((error) => {
        console.log(error, "4000");
      });
  },
};
</script>

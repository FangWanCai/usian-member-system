import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 挂载element-ui
Vue.use(ElementUI);

console.log("process=>", process.env.VUE_APP_BASE_API);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

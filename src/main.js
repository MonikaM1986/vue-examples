import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";
import { configure } from "./config";

configure(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { postMes } from "@/utils/post-message";
Vue.prototype.$postMessage = postMes;

Vue.prototype.$axios = axios;
axios.defaults.baseURL = "https://httpbin.org";

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
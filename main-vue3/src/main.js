import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupApp } from "wujie";
setupApp({
  name: "micro-tradition",
  url: "http://localhost:3003/",
  exec: true,
  el: "#tradition",
  sync: true,
});
setupApp({
  name: "micro-vue2",
  url: "http://localhost:8081/",
  exec: true,
  el: "#vue2",
  sync: true,
});
setupApp({
  name: "micro-react",
  url: "http://localhost:3000/",
  exec: true,
  el: "#react",
  sync: true,
});
createApp(App).use(router).mount("#app");

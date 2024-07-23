import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import microApp from '@micro-zoe/micro-app'

microApp.start()
createApp(App).use(router).mount("#app");



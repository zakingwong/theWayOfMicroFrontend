import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";
console.log(registerMicroApps, "registerMicroApps");
registerMicroApps(
  [
    {
      name: "micro-react-app",
      entry: "http://10.0.57.16:3000/",
      container: "#react",
      activeRule: "/react",
      props: {
        desc: "zakingwong",
      },
    },
  ],
  {
    beforeLoad: (app) => console.log("before load", app.name),
  }
);
// 启动 qiankun
start({
  sandbox: {
    experimentalStyleIsolation: true,
  },
});
createApp(App).use(router).mount("#app");

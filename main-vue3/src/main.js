import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";
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
    {
      name: "micro-vue2-app",
      entry: "http://10.0.57.16:8081/",
      container: "#vue2",
      activeRule: "/vue2",
      props: {
        desc: "zakingwong",
      },
    },
    {
      name: "micro-tradition-app",
      entry: "http://10.0.57.16:3003/",
      container: "#tradition",
      activeRule: "/tradition",
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

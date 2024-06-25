import { createApp } from "vue";
import App from "./App.vue";

// createApp(App).mount('#app')

let vueMicroApp;

window.mountMicroVueApp = function (containerId) {
  console.log("vue app mount");
  vueMicroApp = createApp(App);
  vueMicroApp.mount(`#${containerId}`);
};

window.unmountMicroVueApp = function () {
  console.log("vue app unmount: ", vueMicroApp);
  vueMicroApp && vueMicroApp.unmount();
};

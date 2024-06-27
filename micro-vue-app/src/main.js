import { createApp } from "vue";
import App from "./App.vue";

// createApp(App).mount('#app')

let vueMicroApp;

const mountMicroVueApp = function (containerId) {
  console.log("vue app mount");
  vueMicroApp = createApp(App);
  vueMicroApp.mount(`#${containerId}`);
};

const unmountMicroVueApp = function () {
  console.log("vue app unmount: ", vueMicroApp);
  vueMicroApp && vueMicroApp.unmount();
};


class MicroVueAppElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log(`[MicroVueApp]：执行 connectedCallback 生命周期回调函数`);
    this.mount();
  }
  disconnectedCallback() {
    console.log(
      `[MicroVueApp]：执行 disconnectedCallback 生命周期回调函数`
    );
    // 卸载处理
    this.unmount();
  }

  mount() {
    mountMicroVueApp('vue')
  }

  unmount() {
    unmountMicroVueApp()
  }
}

window.customElements.define("micro-vue-app", MicroVueAppElement);
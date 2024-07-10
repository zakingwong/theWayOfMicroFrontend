import { createApp } from "vue";
import App from "./App.vue";
import { registerMicroAppLifecycle } from "lifecycle";
// createApp(App).mount('#app')

let vueMicroApp;

if (!window.singleSpaNavigate) {
  vueMicroApp = createApp(App);
  vueMicroApp.mount("#app");
}

export async function bootstrap() {
  console.log("Micro Vue bootstrap excuted");
}

export async function mount(props) {
  console.log("vue app mount");
  vueMicroApp = createApp(App);
  vueMicroApp.mount(`#${props.containerId}`);
}

export async function unmount(props) {
  console.log("vue app unmount: ", vueMicroApp,props);
  vueMicroApp && vueMicroApp.unmount();
}

registerMicroAppLifecycle("vue", {
  bootstrap,
  mount,
  unmount,
});

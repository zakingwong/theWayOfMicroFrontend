import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
var name = 'zaking vue';
console.log('-----my vue name:',name)

let app;
export async function bootstrap() {
  console.log("[Vue 子应用] bootstrap excuted");
}
export async function mount(props) {
  console.log("vue app mount");
  app = createApp(App);
  app.mount(`#${props.containerId}`);
}

export async function unmount(props) {
  console.log("vue app unmount: ", props);
  app && app.unmount();
}
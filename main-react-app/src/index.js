import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainApp from "./main";
import store from "./store";
import { start, registerApplication } from "single-spa";
import { loadStaticResource } from "./micro.js";
import { getMicroAppLifecycle } from "lifecycle";
const response = await fetch("http://10.0.57.197:3000/micro-config");
const config = await response.json();
console.log(config, "config");
window.__DEV__ = true;

registerApplication({
  name: "micro-react-app",
  app: () =>
    loadStaticResource(
      "http://10.0.57.197:3001/",
      config["react"]["asset-manifest.json"],
      "react"
    ).then(() => {
      return getMicroAppLifecycle("react");
    }),
  activeWhen: "/react",
  customProps: {
    containerId: "micro-app-container",
  },
});
registerApplication({
  name: "micro-vue3-app",
  app: () =>
    loadStaticResource(
      "http://10.0.57.197:3002/",
      config["vue"]["asset-manifest.json"],
      "vue"
    ).then(() => {
      return getMicroAppLifecycle("vue");
    }),
  activeWhen: "/vue",
  customProps: {
    containerId: "micro-app-container",
  },
});
start();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "react",
        element: <div id="micro-app-container"></div>,
      },
      {
        path: "vue",
        element: <div id="micro-app-container"></div>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

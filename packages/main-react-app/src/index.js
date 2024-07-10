import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ReactApp from "./React";
// import VueApp from "./Vue";

import { start, registerApplication } from "single-spa";

window.__DEV__ = true;

registerApplication({
  name: "micro-react-app",
  app: () => import("micro-react-app"),
  activeWhen: "/react",
  customProps: {
    containerId: "micro-app-container",
  },
});
registerApplication({
  name: "micro-vue3-app",
  app: () => import("micro-vue3-app"),
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
root.render(<RouterProvider router={router} />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

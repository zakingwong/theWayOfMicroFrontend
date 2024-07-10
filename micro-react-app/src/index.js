import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroAppLifecycle } from "lifecycle";

let reactMicroRoot;

if (!window.singleSpaNavigate) {
  reactMicroRoot = ReactDOM.createRoot(document.getElementById("root"));
  reactMicroRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

async function bootstrap() {
  console.log("[Micro React bootstrap excuted");
}

async function mount(props) {
  console.log("react app mount");
  reactMicroRoot = ReactDOM.createRoot(
    document.getElementById(props.containerId)
  );
  reactMicroRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

async function unmount(props) {
  console.log("react app unmount: ", reactMicroRoot,props);
  reactMicroRoot && reactMicroRoot.unmount();
}

registerMicroAppLifecycle("react", {
  bootstrap,
  mount,
  unmount,
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

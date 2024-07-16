import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
let root;

if (!window.__POWERED_BY_QIANKUN__) {
  root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter basename={"/"}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );
}

export async function bootstrap() {
  console.log("[react18] react app bootstraped");
}

export async function mount(props) {
  console.log("[react18] props from main framework mount", props);
  console.log(props.container, "container------------");
  const { container } = props;
  const rootDom = container
    ? container.querySelector("#root")
    : document.querySelector("#root");
  root = ReactDOM.createRoot(rootDom);
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/react" : "/"}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );
}

export async function unmount(props) {
  console.log("[react18] props from main framework unmount", props);
  root && root.unmount();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

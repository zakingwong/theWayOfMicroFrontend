import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

var name = 'zaking';
console.log('-----my react name:',name)

let root;

if (!window.singleSpaNavigate) {
  root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export async function bootstrap() {
  console.log("react app bootstrap excuted");
}

export async function mount(props) {
  console.log("react app mount");
  root = ReactDOM.createRoot(document.getElementById(props.containerId));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export async function unmount(props) {
  console.log("react app unmount: ", props);
  root && root.unmount();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

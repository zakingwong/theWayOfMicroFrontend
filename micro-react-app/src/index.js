import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let reactMicroRoot;
const mountMicroReactApp=function(containerId) {
  console.log("react app mount");
  reactMicroRoot = ReactDOM.createRoot(document.getElementById(containerId));
  reactMicroRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const unmountMicroReactApp = function() {
  console.log("react app unmount: ", reactMicroRoot);
  reactMicroRoot && reactMicroRoot.unmount();
}

class MicroReactAppElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log(`[MicroReactApp]：执行 connectedCallback 生命周期回调函数`);
    this.mount();
  }
  disconnectedCallback() {
    console.log(
      `[MicroReactApp]：执行 disconnectedCallback 生命周期回调函数`
    );
    // 卸载处理
    this.unmount();
  }

  mount() {
    mountMicroReactApp('react')
  }

  unmount() {
    unmountMicroReactApp()
  }
}

window.customElements.define("micro-react-app", MicroReactAppElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

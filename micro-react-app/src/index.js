import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let reactMicroRoot;
 window.mountMicroReactApp=function(containerId) {
  console.log("react app mount");
  reactMicroRoot = ReactDOM.createRoot(document.getElementById(containerId));
  reactMicroRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

window.unmountMicroReactApp = function() {
  console.log("react app unmount: ", reactMicroRoot);
  reactMicroRoot && reactMicroRoot.unmount();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

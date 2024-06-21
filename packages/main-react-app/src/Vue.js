import React, { useEffect } from "react";
const { mount, unmount } = require('micro-vue3-app')

const containerId = 'vue-app';

function VueApp() {
  useEffect(() => {
    mount(containerId);
    return () => {
      unmount();
    };
  }, []);
  return <div id={containerId}></div>;
}

export default VueApp;

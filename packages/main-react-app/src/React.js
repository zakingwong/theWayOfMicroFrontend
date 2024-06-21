import React from "react";

const containerId = 'react-app';
function ReactApp() {
  return <div id={containerId}>react</div>;
}

export default React.memo(ReactApp);

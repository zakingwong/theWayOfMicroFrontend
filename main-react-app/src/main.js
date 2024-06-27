import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadStaticResource, removeStyle } from "./micro";
function MainApp() {
  let location = useLocation();
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);

  useEffect(() => {
    const responseConfig = data;
    let curConfig = [];
    let host = "";
    let id = "";
    const pathname = location.pathname;
    if (pathname === "/vue") {
      if (status === "succeeded") {
        curConfig = responseConfig["vue"]["asset-manifest.json"];
        host = "http://10.0.57.197:3002/";
        id = "vue";
      }
    }
    if (pathname === "/react") {
      if (status === "succeeded") {
        curConfig = responseConfig["react"]["asset-manifest.json"];
        host = "http://10.0.57.197:3001/";
        id = "react";
      }
    }
    const anotherId = id === "vue" ? "react" : "vue";
    const anotherFuns =
      responseConfig[`${anotherId}`]["asset-manifest.json"].funs;
    removeStyle({ id: anotherId });
    window[`${anotherFuns["unmount"]}`] &&
      window[`${anotherFuns["unmount"]}`]();
    loadStaticResource(host, curConfig, id);
  }, [location, data, status]);

  return <div id="micro-slot">zaking</div>;
}

export default MainApp;

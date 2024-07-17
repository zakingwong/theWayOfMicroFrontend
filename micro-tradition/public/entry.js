const render = ($) => {
  $("#container").html("Hello, render with jQuery");
  return Promise.resolve();
};

((global) => {
  global["tradition"] = {
    bootstrap: () => {
      console.log("tradition bootstrap");
      return Promise.resolve();
    },
    mount: () => {
      console.log("tradition mount");
      return render($);
    },
    unmount: () => {
      console.log("tradition unmount");
      return Promise.resolve();
    },
  };
})(window);

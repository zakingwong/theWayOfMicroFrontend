function loadScript({ script, id }) {
  return new Promise((resolve, reject) => {
    const $script = document.createElement("script");
    $script.src = script;
    $script.setAttribute("micro-script", id);
    $script.onload = resolve;
    $script.onerror = reject;
    document.body.appendChild($script);
  });
}

function loadStyle({ style, id }) {
  return new Promise((resolve, reject) => {
    const $style = document.createElement("link");
    $style.href = style;
    $style.setAttribute("micro-style", id);
    $style.rel = "stylesheet";
    $style.onload = resolve;
    $style.onerror = reject;
    document.body.appendChild($style);
  });
}

function removeStyle({ id }) {
  const $style = document.querySelector(`[micro-style=${id}]`);
  $style && $style?.parentNode?.removeChild($style);
}

function loadStaticResource(host, config, id) {
  if (!Object.keys(config).length) return;
  const entrypoints = config.entrypoints;
  // const funs = config.funs;
  const queue = [];
  entrypoints &&
    entrypoints.forEach((item) => {
      if (item.endsWith(".js")) {
        queue.push(
          loadScript({
            script: `${host}${item}`,
            id,
          })
        );
      }
      if (item.endsWith(".css")) {
        queue.push(
          loadStyle({
            style: `${host}${item}`,
            id,
          })
        );
      }
    });
  return Promise.all(queue)
}

export {
  loadScript,
  loadStyle,
  removeStyle,
  loadStaticResource,
};

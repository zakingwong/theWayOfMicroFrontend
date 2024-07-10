const lifeCycleKey = "zakings-lifecycle";

export function checkLifeCycleKeyIfConflict() {
  console.log("window[lifeCycleKey]", window[lifeCycleKey]);

  if (!window[lifeCycleKey]) {
    window[lifeCycleKey] = new Map();
    window[lifeCycleKey].set(lifeCycleKey, lifeCycleKey);
    return;
  }

  if (
    !window[lifeCycleKey] instanceof Map ||
    window[lifeCycleKey].get(lifeCycleKey) !== lifeCycleKey
  ) {
    throw new Error("window.zakings-lifecycle 存在冲突");
  }
}

export function registerMicroAppLifecycle(app, lifeCycle) {
  checkLifeCycleKeyIfConflict();
  if (window[lifeCycleKey].has(app)) {
    throw new Error(`app: ${app} 已经存在`);
  }
  window[lifeCycleKey].set(app, lifeCycle);
}

export function unregisterMicroAppLifecycle(app) {
  checkLifeCycleKeyIfConflict();

  if (!window[lifeCycleKey].has(app)) {
    throw new Error(`app: ${app} 不存在`);
  }

  window[lifeCycleKey].delete(app);
}

export function getMicroAppLifecycle(app) {
  checkLifeCycleKeyIfConflict();

  const lifeCycle = window[lifeCycleKey].get(app);
  if (!lifeCycle) {
    throw new Error(`app: ${app} 不存在`);
  }
  return lifeCycle;
}

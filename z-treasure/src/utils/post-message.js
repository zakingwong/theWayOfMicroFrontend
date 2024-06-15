export default postMessage = function () {
  const params = Array.prototype.slice.call(arguments);
  const windowSource = params[0];
  params.splice(0, 1);
  if (windowSource && windowSource.postMessage) {
    windowSource.postMessage(...params);
  }
};

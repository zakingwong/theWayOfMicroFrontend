// 使用展开符来获取数组格式的 pipe 参数
function pipe(...funcs) {
  function callback(input, func) {
    return func(input);
  }

  return function (param) {
    return funcs.reduce(callback, param);
  };
}

function add2(x) {
  return x + 2;
}

function add8(x) {
  return x + 8;
}

function muti7(x) {
  return x * 7;
}

const f = pipe(add2, add8, muti7);
console.log(f(2));

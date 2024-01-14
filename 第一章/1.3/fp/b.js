function a() {
  return 1;
}

function b() {
  return 2;
}

var variA = a;
var variB = b;

function add(a, b) {
  return a() + b();
}

console.log(add(a, b));
console.log(add(variA, variB));

function test() {
  return function () {
    console.log("yahaha");
  };
}
const t = test();
t();

test()();

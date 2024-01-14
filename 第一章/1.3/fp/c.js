var a = 1;
var b = a;
console.log(a === b);
b = 2;
console.log(a, b, a === b);

var nameA = {
  name: "zaking",
};
var nameB = nameA;
nameB.name = "another zaking";

console.log(nameA === nameB); // true

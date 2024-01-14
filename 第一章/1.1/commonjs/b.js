var a = require("./a.js");
console.log(a.name); // zaking
a.name = "xiaoba";
var b = require("./a.js");
console.log(b.name); // xiaoba

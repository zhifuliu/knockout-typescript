"use strict";
var greet_1 = require('./greet');
function hello(compiler) {
    console.log('Hello from ' + compiler);
}
hello('Typescript');
console.log(greet_1.sayHello('ts'));

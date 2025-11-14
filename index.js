const privatePackage = require('vulnerable-dependency');

function helloWorld() {
  console.log('Hello from the vulnerable package!');
  privatePackage.sayHello();
}

module.exports = helloWorld;

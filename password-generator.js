const generatorpassword = require("generate-password");

var password = generatorpassword.generate({
  length: 10,
  numbers: false,
});
console.log(password);

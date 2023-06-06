var generator = require('generate-password');
var password = generator.generate({
    length: 64,
    symbols:false,
    numbers:true

});
console.log(password)
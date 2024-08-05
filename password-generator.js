const generate = require('generate-password');
function GeneratePassword() { 
    const password = generate.generate({
        length: 10, 
        numbers: true,
        uppercase: true,
      });
  return password  
}
console.log(GeneratePassword())
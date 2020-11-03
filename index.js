const interface = require('readline-sync');
const calculator = require('./app/calculator');
const firstNumber = parseInt(interface.question('Deme el primer numero: '));
const secondNumber = parseInt(interface.question('Deme el segundo numero: '));

console.log(`Add: ${ firstNumber } + ${ secondNumber } = ${ calculator.add(firstNumber, secondNumber) }`);
console.log(`minus: ${ firstNumber } - ${ secondNumber } = ${ calculator.minus(firstNumber, secondNumber) }`);
console.log(`multiply: ${ firstNumber } * ${ secondNumber } = ${ calculator.multiply(firstNumber, secondNumber) }`);
console.log(`divide: ${ firstNumber } / ${ secondNumber } = ${ calculator.divide(firstNumber, secondNumber) }`);
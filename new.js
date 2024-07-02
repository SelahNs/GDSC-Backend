const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    default:
      return 'Error: Invalid operator';
  }
}

function convertUnit(value, fromUnit, toUnit) {
  const conversions = {
    'm': 1,
    'cm': 0.01,
    'mm': 0.001,
    'km': 1000,
    'in': 0.0254,
    'ft': 0.3048,
    'yd': 0.9144,
    'mi': 1609.34
  };

  if (!(fromUnit in conversions) || !(toUnit in conversions)) {
    return 'Error: Invalid unit';
  }

  return (value * conversions[fromUnit]) / conversions[toUnit];
}
function promptUser() {
  rl.question('Enter \'calc\' for arithmetic operations or \'conv\' for lenght uni converter or "q" to quit: ', (operation) => {
    if (operation.toLowerCase() === 'q') {
      rl.close();
      return;
    }

    if (operation.toLowerCase() === 'calc') {
      rl.question('Enter calculation (e.g, 1 + 2): ', (input) => {
        const [num1, operator, num2] = input.split(' ');
        const result = calculate(parseFloat(num1), operator, parseFloat(num2));
        console.log(`Result: ${result}`);
        promptUser();
      });
    } else if (operation.toLowerCase() === 'conv') {
      rl.question('Enter conversion you can enter "m" for meter,"mm for milimeter","cm" for centimeter,"km" km for killometer,"in" for inch,"ft"for foot,"yd" for yard,"mi" for  (e.g, 1 m cm): ', (input) => {
        const [value, fromUnit, toUnit] = input.split(' ');
        const result = convertUnit(parseFloat(value), fromUnit, toUnit);
        console.log(`Result: ${result} ${toUnit}`);
        promptUser();
      });
    } else {
      console.log('Invalid operation. Please enter "calc" or "conv".');
      promptUser();
    }
  });
}

console.log('Welcome to the Calculator and Unit Converter(lenght) Console Application!');
promptUser();
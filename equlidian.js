function gcd(a, b) {
    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        const result = gcd(parseFloat(num1), parseFloat(num2));

        console.log(`The GCF of ${num1} and ${num2} is ${result}`);
        rl.close();
    });
});

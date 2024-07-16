const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function computeGCF(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    if (b > a) {
        const temp = a;
        a = b;
        b = temp;
    }

    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        // Calculate GCF
        const result = computeGCF(parseFloat(num1), parseFloat(num2));

        // Display the result
        console.log(`The GCF of ${num1} and ${num2} is ${result}`);
        rl.close();
    });
});

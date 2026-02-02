function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


const multiply = function(a, b) {
    return a * b;
};

const power = (a, b) => Math.pow(a, b);

function harmonicSeries(n) {
    if (n <= 1) {
        return 1;
    }
    return 1 / n + harmonicSeries(n - 1);
}

function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

function processSet(set, callback) {
    set.forEach(value => {
        callback(value);
    });
}


console.log("1. Сума (1 до 5):", calculateSum(5));
console.log("2. Множення (3 * 4):", multiply(3, 4));
console.log("3. Степінь (2^3):", power(2, 3));
console.log("4. Гармонічний ряд (n=3):", harmonicSeries(3).toFixed(4));

const double = createMultiplier(2);
console.log("5. Замикання (множник 2 для числа 10):", double(10));

const mySet = new Set([10, 20, 30]);
console.log("6*. Робота з Set:");
processSet(mySet, (val) => console.log(` - Елемент множини: ${val}`));
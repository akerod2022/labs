let n = prompt("Введіть n:"); 
for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) row += j;
    for (let j = i - 1; j >= 1; j--) row += j;
    console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) row += j;
    for (let j = i - 1; j >= 1; j--) row += j;
    console.log(row);
}

let n2 = prompt("Введіть n для суми:");
let sum = 0;
for (let i = 1; i <= n2; i++) {
    sum = sum + i;
}
console.log("Сума: " + sum);

let secret = Math.floor(Math.random() * 20) + 1;
let guess = 0;

while (guess != secret) {
    guess = prompt("Вгадай число від 1 до 20:");
    if (guess < secret) {
        console.log("Підказка: Більше");
    } 
    if (guess > secret) {
        console.log("Підказка: Менше");
    }
}
console.log("Перемога! Число було: " + secret);
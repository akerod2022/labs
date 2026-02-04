let n = parseInt(prompt("Завдання 1: Введіть розмір ромба (n):"));

if (!isNaN(n)) {
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
}

let n2 = parseInt(prompt("Завдання 2: Введіть n для обчислення суми ряду:"));
let sum = 0;
let series = "";

if (!isNaN(n2)) {
    for (let i = 1; i <= n2; i++) {
        sum += i;
        series += i + (i < n2 ? " + " : "");
    }
    console.log("Ряд: " + series);
    console.log("Сума: " + sum);
}

let secret = Math.floor(Math.random() * 20) + 1;
let guess = 0;
let message = "Вгадай число від 1 до 20:";

while (true) {
    let input = prompt(message);
    
    if (input === null) {
        alert("Гру припинено.");
        break;
    }

    guess = parseInt(input);

    if (isNaN(guess)) {
        message = "Це не число! Введіть число від 1 до 20:";
    } else if (guess < secret) {
        message = "Мало! Спробуй більше число:";
    } else if (guess > secret) {
        message = "Багато! Спробуй менше число:";
    } else {
        alert("Перемога! Число було: " + secret);
        console.log("Перемога! Число було: " + secret);
        break;
    }
}
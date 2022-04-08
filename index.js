const readline = require('readline-sync');
const colors = require('colors');

console.log('Введите минимальное значение')
let min = readline.prompt();
console.log('Введите максимальное значение')
let max = readline.prompt();


if (isNaN(min) || isNaN(max)) {
    console.log(colors.red('Аргумент не считается числом'))
}

nextPrime:
    for (let i = min; i <= max; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime;
            // if (i % j !== 0) {
            //     console.log(colors.red('Простых чисел в диапазоне нет'))
            // }
        }
        console.log(colors.green(i));
    }
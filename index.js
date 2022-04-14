const colors = require('colors');

let time = setInterval(() => {
    let date = new Date();
    let date2 = new Date(2022, 4, 14, 15, 14, 30);
    console.log(date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    if (date === date2) {
        clearInterval(time);
        console.log(colors.red('Вы достигли назначенного времени'))
    }
}, 1000);

console.log(time);
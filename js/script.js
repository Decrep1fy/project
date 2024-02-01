"use strict";

const countOfApple = +prompt(`Cколько яблок у тебя есть?`,``);
const countOfGive = +prompt (`Cколько хочешь отдать?`,``);

if (countOfApple < countOfGive){
    console.log(`иди нахуй!`);
} else console.log (countOfApple - countOfGive)

// const appleCount = prompt("Сколько у вас яблок?"); // Введите количество яблок
// const toGiveAway = prompt("Сколько яблок вы хотите отдать?"); // Введите количество яблок, которые хотите отдать

// if (toGiveAway > appleCount) {
//   console.log("Нельзя отдать больше яблок, чем у вас есть!");
// } else {
//   const remainingApples = appleCount - toGiveAway;
//   console.log(`У вас осталось ${remainingApples} яблок.`);
// }
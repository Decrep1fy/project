"use strict";
if (3) {
    console.log ('Ok!');
} else {
    console.log(`error`);
}

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log(`дохуя`);
// }else {
//     console.log(`oke!`);
// }

// (num === 50) ? console.log(`oke!`) : console.log(`error`);

const accountName = "Mil1furion";

switch (accountName) {
    default:
        console.log(`иди нахуй!`);
        break;
    case "Milfurion":
        console.log(`Да!`);
        break;
}

const accountPass = "Redfox1strategi";

switch (accountPass) {
    default:
        console.log(`иди нахуй!`);
        break;
    case "Redfoxsstrategi":
        console.log(`Да!`);
        break;
}

if (accountName === 'Milfurion'&& accountPass === `Redfoxsstrategi`){
    console.log(`Да!`);
} else{
    console.log(`Пошел нахуй!`);
}


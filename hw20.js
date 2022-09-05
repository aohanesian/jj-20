`use strict`;

let potatoPrice = 13;
let soupLiters = 48;

function foo(liters, price) {
    const potato = 4 * 0.075;
    return Math.ceil(potato * liters * price) + ` UAH 🥔`;
}

console.log(foo(soupLiters, potatoPrice));
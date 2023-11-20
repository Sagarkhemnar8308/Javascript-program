"use strict"
let a = 13, b = 4;
let c = "%";


switch (c) {
    case "add":
        console.log(a + b);
        break;
    case "sub":
        console.log(a - b);
        break;
    case "multi":
        console.log(a * b);
        break;
    case "divide":
        console.log(a / b);
        break;
    case "%":
        console.log(a % b);
        break;
    default:
        console.log("NaN")

}
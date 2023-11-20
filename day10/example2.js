let a = new Date;

let e = a.getDate();

let c = a.getFullYear();

let b = a.getMonth();
if (b == 0) {
    console.log("january")
} else if (b == 1) {
    console.log("february")
} else if (b == 2) {
    console.log("march")
} else if (b == 3) {
    console.log("april")
} else if (b == 4) {
    console.log("may")
} else if (b == 5) {
    console.log("june")
} else if (b == 6) {
    console.log("july")
} else if (b == 7) {
    console.log("august")
} else if (b == 8) {
    console.log("septeber ")
} else if (b == 9) {
    console.log("october ")
} else if (b == 10) {
    console.log("november")
} else if (b == 11) {
    console.log("december")
}


console.log("0" + e + "/" + b + "/" + c)
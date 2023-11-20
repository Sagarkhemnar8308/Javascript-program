let a = new Date;

let b = a.getHours();
let c = a.getMinutes();
let d = a.getSeconds();
let e = a.getDate();
let f = a.getFullYear();
let g = a.getMonth();

console.log("DATE -" + ' 0' + e + "/" + g + "/" + f)
console.log("TIME - " + b + ":" + c + ":" + d)

if (b >= 0 && b < 12) {
    console.log(" Good morning😍💻")
} else if (b >= 12 && b < 17) {
    console.log(" Good Afternoon😎💻")
} else if (b >= 17 && b < 24) {
    console.log(" Good Evening😍✨")
}


let a = new Date();
console.log('This is time ', a);

let k = a.getDate();
console.log('Date :-', k)

let b = a.getDay();
console.log();

if (b == 1) {
    console.log("monday")
} else if (b == 2) {
    console.log("Day :- tuesday")
} else if (b == 3) {
    console.log("Day :- wednesday")
} else if (b == 4) {
    console.log(" Day :- thursday")
} else if (b == 5) {
    console.log(" Day :- friday")
} else if (b == 6) {
    console.log("Day :- satarday")
} else if (b == 7) {
    console.log("Day :- sunday")
}


let c = a.getFullYear();
console.log(' year :-', c);

let d = a.getHours();
console.log(' hour :- ', d);

let f = a.getMinutes();
console.log(' minute :- ', f);

let h = a.getSeconds();
console.log("  seconds :- ", h)

let e = a.getMilliseconds();
console.log(' milisecond :- ', e);


let g = a.getMonth();
console.log('  month :-', g);





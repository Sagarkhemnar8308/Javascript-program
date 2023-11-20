//1
let a = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let b = a.reduce(function (acc, el, index, array) {
    return el + acc;
})
console.log(b)



//2
let c = [1.7, 1.5, 6.9, 35.6,]
let d = c.reduce(function (el, acc, index, array) {
    return acc + el;
})
console.log(d)



//3
let e = [34342, 464536, 7876, 8900, 5465.7, 457676, 87]

let f = e.reduce(function (acc, el, index, array) {
    return acc + el
})
console.log(f)



//4
let g = [34, 65, 38, 36, 28, 68, 46];
let h = g.reduce(function (el, acc, index, array) {
    return acc + el
})
console.log("addition is ", h)



//5
let i = [12, 56, 78, 98, 8, 3, 5, 1.5];
let j = i.reduce(function (el, acc, index, array) {
    return acc + el;
})
console.log(j);
//1
let number = [12, 123, 56, 78, 56, 34, 23]
let a = number.map(function (el, index, array) {
      return el * 3
})
console.log(a)



//2
let num = [12, 123, 56, 78, 56, 34, 23]
let b = num.map(function (el, index, ary) {
      return el - 3
})
console.log(b)


//3
let n = [12, 123, 56, 78, 56, 34, 23]
let c = n.map(function (el, index, ary) {
      return el + 3
})
console.log(c)


//4
let d = [12, 123, 56, 78, 56, 34, 23]
let e = d.map(function (el, index, ary) {
      return el / 3
})
console.log(e)


//5
let f = [12, 123, 56, 78, 56, 34, 23]
let g = f.map(function (el, index, ary) {
      return el % 3
})
console.log(g)

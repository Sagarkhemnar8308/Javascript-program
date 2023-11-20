//1
let a=["sagar","naman","shubham","suraj"]
let b=a.splice(2,3,"samir")
console.log(a)

//2
let c=["mango","orange","apple","custardapple","banana"]
let d=c.splice(0,1,"coconut")
console.log(c)

//3
let e=['dog','cat','ox','buffalo','goat','cow']
let f=e.splice(0,1,"sheep")
console.log(e)

//4
let g=['a','b','c','d','e','g']
let h=g.splice(5,0,'f')
console.log(g)

//5
let i=[12,24,36,48,60,72,96,108,120]
let j=i.splice(6,0,84)
console.log(i)

console.log(i.length)
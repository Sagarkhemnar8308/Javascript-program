//1
let c=[20,54,23,75,24,90,68]
let d=c.find(function(el,array,index){
    return el>20;
})
console.log(d)

//2
let a=[10,20,30,40,50]
let b=a.find(function(el,array,index){
    return el>40;
})
console.log(b)

//3
let e=[60,70,80,90,100]
let f=e.find(function(el,index,array){
    return el>71;
})
console.log(f)

//4
let g=[12,67,56,789,433,26
    ,245,78]
let h=g.find(function(el,index,array){
    return el>13
})
console.log(h)

//5
let i=[1.3,5.6,4.7,25.6]

let j=i.find(function(el,index,array){
    return el>5
})
console.log(j)




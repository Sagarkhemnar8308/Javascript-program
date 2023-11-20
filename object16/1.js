let a=[1,2,3,4,5,6,7,8,9]
let b=a.map(function(el,array,index){
    return el+9
})
console.log(b)

let c=a.filter(function(el,index,array){
     return el>2
})
console.log(c)

let d=a.reduce(function(acc,el,array,index){
    return el+acc;
})
console.log(d)

let e=a.forEach(function(el,array,index){
    console.log('welcome',el)
})

let f=a.find(function(el,array,index){
    return el>2;
})
console.log(f)

let g=a.findIndex(function(el,array,index){
     return el>2;
})
console.log(g)

let h=a.every(function(el,array,index){
    return el<10;
})
console.log(h)

let i=a.some(function(el,index,array){
    return el>8
})
console.log(i)
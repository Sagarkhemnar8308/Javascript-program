//1
let a=[20,54,23,75,24,90,68]
let b=a.some(function(el,array,index){
    return el > 89;
})
console.log(b)                                

//2
let c=[1.2,2.3,3.4,4.5,5.6,6.7] 
let d=c.some(function(el,array,index){
      return el>7
})
       console.log(d)

//3 
let e=[1234,2345,3456,4567,5687,6789]
let f=e.some(function(el,array,index){
    return el<1000
})
console.log(f)


//4
let g=[1,2,3,4,5,6,7,8]
let h=g.some(function(el,array,index){
    return el>4
})
console.log(h)

//5
let i=[12,24,36,48,60,72,84]
let j=i.some(function(el,index,array){
    return el>84
})
console.log(j)
//1
let a=[21,5,55,23,8,534,543,564,10,33,56,67,56,4,]
let b=a.every(function(el,array,index){
    return el>3;
})
console.log(b)


//2
let c=[3214,5363,7845,8554,9640]
let d=c.every(function(el,array,index){
    return el>4000;
})
console.log(d)

//3
let e=[234,456,235,786,531,241,787,323,898]
let f=e.every(function(el,array,index){
    return el>200
})
console.log(f)

//4
let g=[4534,2039,3046,4023,5820,6280,7890]
let h=g.every(function(el,array,index){
      return el>3000;
})
console.log(h)

//5

let i=[20984,34578,41289,90864,56840]
let j=i.every(function(el,index,array){
            return el>20000
})
console.log(j)
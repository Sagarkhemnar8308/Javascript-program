//1
let a=[21,5,55,23,6,6,8,534,543,564,4,33,,67,56,4,]
let b=a.filter(function(el,array,index){
    return el>50;
})
console.log(b)


//2
let c=[21,5,55,23,6,6,8,534,543,564,4,33,,67,56,4,]
let d=c.filter(function(el,array,index){
    return el<543;
})
console.log(d)

//3
let e=[234,456,235,786,531,241,787,323,898]
let f=e.filter(function(el,array,index){
    return el<500
})
console.log(f)

//4
let g=[4534,2039,3046,4023,5820,6280,7890]
let h=g.filter(function(el,array,index){
      return el>3000;
})
console.log(h)

//5

let i=[20984,34578,41289,90864,56840]
let j=i.filter(function(el,index,array){
            return el<30000
})
console.log(j)
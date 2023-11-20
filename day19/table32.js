// let a=12;
// let b=Math.sqrt(a);
// let prime=true;
// for(let c=2;c<=b;c++){
//   if(a%1==0){
//     prime=false;
//     break;
// }
// }
// if(prime){
//     console.log(a," is prime number")
// }else{
//     console.log(a," is not prime number")
// }

// let a=1;
// let b=Math.sqrt(a);
// let prime=true;
// for(let c=2; c<=b;c++){
// if(a%1==0){
//   prime=false;
//   break;
// }
// }
// if(prime){
//     console.log(a+" is prime number")
// }else{
//     console.log(a+" is not a prime number")
// }


let d=[1,2,3,4,5,6,7,8]
let e=d.map(function(el,array){
    return el+2
})
console.log(e)

let f=d.filter(function(el,array,index){
    return el>2
})
console.log(f)


let g=d.forEach(function(el,array,index){
    console.log(el+" good")
})   

let h=d.reduce(function(acc,el,array,index){
    return el+acc
})
console.log(h)


let i=d.some(function(el,array,index){
          return el>7
})
console.log(i)


let a=1;
let b=Math.sqrt(a);
let prime=true;
for(let c=2; c<=b;c++){
if(a%1==0){
  prime=false;
  break;
}
}
if(prime){
    console.log(a+" is prime number")
}else{
    console.log(a+" is not a prime number")
}


let d=18;
let e=Math.sqrt(d);
let sum=true;
for(f=2;f<=e;f++){
    if(d%1==0){
        sum=false;
        break;
    }
}
if(sum){
    console.log(d,"is prime number")
}else{
    console.log(d,"is not prime number")
}
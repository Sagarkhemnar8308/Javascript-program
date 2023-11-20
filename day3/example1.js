var n = -33;
var m = Math.sqrt(n);
var isprime = true;

for (var i = 2; i <= m; i++) {
    if (n % i == 0) {
        isprime = false;
     break;
   }
   if(n<0){
    console.log("is not a prime")
}
break;
}
if (isprime) {
    console.log(n, "prime number ")
}

else {
    console.log(n, " is not prime number ")
}

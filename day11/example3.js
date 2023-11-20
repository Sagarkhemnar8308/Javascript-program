let month=["jan","feb", "mar", "april", "may" ,"june", "july", "aug","sep","oct","nov","December"]
let d=new Date;

let a=month[d.getMonth()]


let day=["sun","mon","tue","wed","thu","Friday","sat"]
let b=day[d.getDay()]

let c=d.getDate();
let e=d.getHours();
let f=d.getMinutes();
if(e==16){
    console.log("4"+":"+f)
}

console.log(b,a,c)
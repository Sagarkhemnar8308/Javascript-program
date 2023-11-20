let month=["jan","feb","march","april","may","june","july","august","sep","oct","nov","Dec"]
let d=new Date;
let name1=month[d.getMonth()]
let day=["sunday","monday","tuesday","wednesday","thurday","friday","saturday"]
let a=day[d.getDay()];
let date=d.getDate();
let year=d.getFullYear();
let z=d.getHours();
let y=d.getMinutes();
let x=d.getSeconds();
let w=d.getMilliseconds();
if (z >= 0 && z < 12) {
    console.log(" Good morning😍💻")
} else if (z >= 12 && z < 17) {
    console.log(" Good Afternoon😎💻")
} else if (z >= 17 && z < 24) {
    console.log(" Good Even;ing😍✨")
}
console.log(" 0"+date+"/"+name1+"/"+year +"\n"+"Day is "+a+"\n"+"time is "+z+":"+y+":"+x+":"+w)

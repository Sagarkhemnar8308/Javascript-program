let a=[
{
    firstname:'sagar',
    age:'34'
},
{
    firstname:'shubham',
    age:'24'
},
{
    firstname:'suraj',
    age:'14'
}
]

console.log(a);

console.log(a[0]["age"]);

a.forEach(function(el,array){
    el.city='sangamner';
})
console.log(a)

a.forEach(function(el,array,index){
    console.log(el.firstname+" : "+el.age+" : "+el.city)
})



let b=["hundred","thousand","fifty"]

let[a1,a2,a3]=b
console.log(a2)
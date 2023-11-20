let a=[
{
    firstname:'sagar',
    lastname:'khemnar',
    age:'88',
    skill:'html,css,java,'
},
{
    firstname:'shubham',
    lastname:'phad',
    age:'56',
    skill:'html,css,java,'
},
{
    firstname:'suraj',
    lastname:'bombole',
    age:'35',
    skill:'html,css,java,'
},
{
    firstname:'sahil',
    lastname:'sonawane',
    age:'68',
    skill:'html,css,java,'
}
]

console.log(a)

a.forEach(function(el){
         console.log("age are",el.age)
})

console.log(a[2]["age"]);

a.forEach(function(el){
el.country="india"
})

console.log(a)

a.forEach(function(el){
console.log(el.firstname+ ":",el.lastname,":"," age is ",el.age)
})



// let a=[
// {
//    firstname:'sagar khemnar',
//    age:'28'
// },
// {
// firstname:'suraj bomble',
// age:'34',
// }
// ]
// console.log(a)

// console.log(a[1]["age"])

// a.forEach(function(el){
//     el.city="sangamner"
// })
// console.log(a)

// a.forEach(function(el){
//    console.log(el.firstname,": age is "+el.age)
// })

// let a=[
// {
//    firstname:'sagar ',
//    lastname:'khemnar',
//    age:'45'
// },
// {
//    firstname:'tushar',
//    lastname:'dushing',
//    age:'25'
// },
// {
//    firstname:'sahil',
//    lastname:'sonawane',
//    age:'15'
// }
// ]

// console.log(a)
// console.log(a[1]["firstname"])
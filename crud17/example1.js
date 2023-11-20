//curd
// create read update delete

//1
let a={
    firstname:'salman',
    lastname:'khan',
    age:'21'
}
console.log(a.firstname)
console.log(a['lastname'])
//add
let b=a.city="sangamner"
console.log(a)

//update
let c=a.age='23'
console.log(a)

//delete
let  d=delete a.age
console.log(a)
  


e={
    firstname:'vikas',
    age:'14'
}

console.log(e)

//add
console.log(e.city="sangamner")
console.log(e)

//update
console.log(e.age="20")
console.log(e)

//delete
console.log(delete e.age)
console.log(e)


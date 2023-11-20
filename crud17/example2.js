//2
let e={
    flower1:'lotus',
    flower2:'mogra',
    flower3:'jasmine',
    flower4:'rose'
}

console.log(e.flower1)
console.log(e['flower2'])

//add
let f=e.flower5='marigold'
console.log(e)

//update
let g=e.flower3='champa'
console.log(e)

//delete
let h=delete e.flower1
console.log(e)


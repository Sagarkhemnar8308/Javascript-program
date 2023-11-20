//"use strict"
let salary;
let empName;
let gender;

const PF = 200;
empName = "sagar"
gender = "male";
salary = 10000;

if (salary <= 10000 && gender == "female") {
   console.log(empName + " will not have to pay" + PF + "ruppes")
}

if (salary > 10000 && gender == "female") {
   console.log(empName + " will have to pay" + PF + "ruppes")
}

if (salary <= 7000 && gender == "male") {
   console.log(empName + " will not have to pay" + PF + "ruppes")
}

if (salary <= 7000 && gender == "male") {
   console.log(empName + " will  have to pay" + PT + "ruppes")
}

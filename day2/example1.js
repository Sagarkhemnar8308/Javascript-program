"use strict"
let stdName;
let english, math, marathi, hindi, biology, phy;

stdName = "shubham";
english = 53;
math = 35;
marathi = 45;
hindi = 69;
biology = 40;
phy = 46;

let markObtained = english + math + marathi + hindi + biology + phy;
const totalMark = 600;
let persentage = markObtained / totalMark * 100;

if (
    english < 35 ||
    math < 35 ||
    marathi < 35 ||
    hindi < 35 ||
    biology < 35 ||
    phy < 35 ) {
    console.log(stdName + " is failed and get " + persentage + "% ")
} else {
    console.log(stdName + " is passed and get " + persentage + "% ")
}
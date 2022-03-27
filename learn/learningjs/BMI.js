

let markMass = 78;
let markheight=1.69;
let johnMass = 92;
let johnheight = 1.95;


let BMI = markMass / markheight ** 2;
console.log(BMI);
let BMI1 = johnMass / johnheight ** 2;
console.log(BMI1);

let  markHeigherBMI = BMI > BMI1;

console.log(markHeigherBMI);

const output = `mark has ${BMI} and john has ${BMI1}`;
console.log(output);


if(BMI> BMI1){
    console.log("marks bmi is higher than john");
}
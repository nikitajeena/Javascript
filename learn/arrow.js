
//arrow function 
// does not require to open curly braces
const cal = year => 2000 - year;
const age = cal(2000);
console.log(age);

const retirementyear = (year, username) => {
    const age = 2300 - year;
    const retirement = 65 - age;
    //return

    return `${username} retires in ${retirement}`;



}

console.log(retirementyear(2000, 'nikita'));

//binding with this is different with arrow fucntions'

// function calling other function

function square(x){
return x * x;
}

function inputt(a, b){
 const output = square(a);
 const output1 = square(b);

 const multiple = `${output} and ${output1}`;
 return multiple;
}

console.log(inputt(2,3));
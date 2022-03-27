// 'use strict';
let hasDriversLincense = false;
const passTest = true;
if(passTest) hasDriverLincense = true;
if(hasDriversLincense) console.log('I can drive');

// strict mode help us to find error  In the case if we write the 
// same code without using the strict mode it will not throw error
// since I have used strict mode it is indicating where error is 
// helpful to find bug 

const interface = 2;
console.log(interface);

//with strict we won't be able to use this words
//interface indicate future reserve words also

function fruitprocessor(apple, orange){

    console.log(apple, orange);
    const juice = `juice with ${apple} apples and ${orange} oranges`;

// return juice;
console.log(juice)

}

fruitprocessor(1,2);
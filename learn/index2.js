// var arr = [1,2,3];
// var arr2 = [1,4,9];
// var arr3 = [];
// for(let i = 0; i<arr.length; i++){
//     arr3.push(arr[i]*2);
//     if(arr3 == arr2){
//         console.log(true);
//     }else{
//         console.log(false)
//     }
// }
// console.log(arr3)

for (let j = 0; j <= 100; j++) {
  if (j % 3 == 0 && j % 5 == 0) {
    console.log("FIZZBUZZ");
  } else if (j % 3 == 0) {
    console.log("FIZZ");
  } else if (j % 5 == 0) {
    console.log("BUZZ");
  } else {
    console.log(j);
  }
}

//function declaration

function calAge(year) {
  return 2000 - year;
}
const age1 = calAge(1995);

//function expression

const calAge1 = function (year) {
  return 2000 - year;
};
const age2 = calAge1(2003);
console.log(age1, age2);

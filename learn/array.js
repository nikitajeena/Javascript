//data structure
// array is like a container where we can store data and later we
//reference them 
const usernames = ['nikita', 'shakshi','lata'];
const lastnames = new Array('jeena','kharkwal','adhikari');
console.log(lastnames.length);
// we can mutate the array
usernames[0] = 'pankaj';  // to replace the array values
console.log(usernames);

function  calage(year){
    return 2000 - year;
}


const ages = [25,26,25];
// we cannot pass  array as an argument
const x = calage(ages[0]);
console.log(x);

const y = [calage(ages[0]), calage(ages[1])];
console.log(y);
// will return a array

const z = ages.push(40);
console.log(ages);
console.log(z);
//push return a new value of an array and add an element at the end
//unshift return a new value of an array
// unshift add element in the beginning of an array
// pop delete an element from the end
//shift delete an element from the start


//indexOf return the address of an element and -1 if an element doesnot exist in array
console.log(ages.indexOf(30));

if(ages.includes(25)){
    console.log('includes check whether the element exist or not and return true or false acc');

}
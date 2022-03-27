// let inputString = "right";

function stringreverse(inputString) {
  for (let i = inputString.length - 1; i >= 0; i--) {
    let output = inputString[i];
    console.log(inputString[i]);
    console.log(output);
  }
}

stringreverse("right");

function getreverse(str) {
  // const strArr = str.split('');
  // strArr.reverse();
  // console.log(strArr);
  // return strArr.join('');

  console.log( str.split("").reverse().join(""));
}

getreverse("nikita");
// 
function rev(str){
let revstring = '';
for(let char of str){

    revstring = char + revstring;
}
// return revstring;
console.log(revstring);
}
rev("abcdef");

// #######################
function revv(strr){
let revstring1 = '';
//   strr.split('').forEach(charr => revstring1 = charr + revstring1);
  console.log( strr.split('').forEach(charr => revstring1 = charr + revstring1));
    
}

revv("nikitajeena");





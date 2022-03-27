function panlindrome(input){
    //    let rev = " ";
//     for(let char of input){
//   rev = char + rev;


//     }


   let rev = input.split("").reverse().join("");

console.log(input);
    if(JSON.stringify(rev) ==  JSON.stringify(input)){
        console.log("it is a panlindrome");
    }else{
console.log("it is not a panlindrome");
    }



}

panlindrome("121");
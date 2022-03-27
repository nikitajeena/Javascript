console.log(1);

var a = 0;
var b = 1;
for(let i=1; i<=10; i++){
    var c = a + b;

    a=b;
    b=c

console.log(c);
   
   

}
// fibonacci

var arr = [2,3,4];
var arr2 = [4,9,16];
let arr3=[];
for(let i=0; i <arr.length; i++){
    let output =  arr[i]*arr[i];
    arr3.push(output);

}

console.log(arr3);
if(JSON.stringify(arr2) == JSON.stringify(arr3)){
    console.log ("both are equal");
}else{
    console.log("numbers are not equal");
}


//reverse string 

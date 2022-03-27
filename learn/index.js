var arr = [1,2,3,,,6];
for (let i =0; i < arr.length; i++){

    if (i+1 == arr[i]){
        console.log("exist");
    }else{
        console.log(i+1);
    }
}


var string = "nikita";
var stringg = "bhjkls";


for(let i = 0; i < string.length; i++){
 var output = string.split('')

//    console.log(output);
for(let j = 0; j < stringg.length; j++){
    // console.log(output[i]);
    
    if(JSON.stringify(output[i]) == JSON.stringify(stringg[j])){
        console.log(true);
    }else {
        console.log("does not exist");
    }
}
}
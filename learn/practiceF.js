function avgcal(a, b, c) {
  return (a + b + c) / 3;
}

const calage = (a, b, c) => (a + b +c)/3;
let scoreD = calage(20,30,40);
let scoreK = calage(40,30,40);

const checkwinner = function(avgD, avgK){
 const checkdouble = 2*avgD;
 const checkdouble1 = 2*avgK;
 if(checkdouble > checkdouble1){
   console.log(`Winner is dolphins score ${avgD}`);
 }else{
   console.log(`winner is koalas score is ${avgK}`);
 }

}
checkwinner(scoreD,scoreK);

// we can pass function declaration or function as an argument 

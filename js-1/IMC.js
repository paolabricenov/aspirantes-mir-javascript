function BMI(weight, height){
    if(weight<=0 || height<=0) return 0;
    return(weight/(height^2));
}

var weight=85
var height=180

console.log(BMI(65, 1.8));
console.log(BMI(72, 1.6));
console.log(BMI(52, 1.75));
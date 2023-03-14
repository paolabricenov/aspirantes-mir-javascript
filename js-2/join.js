const join=function(array){
    if(array.lenght) return"";

    let str="";

    for(let word of array){
        str+=word + " ";
    }
    return str;
}





console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""
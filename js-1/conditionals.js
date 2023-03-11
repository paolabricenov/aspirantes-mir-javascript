function calculaColor(num) {
    let color = "";
    if (num === 1) {
        color = "black";
    } else if (num === 2) {
        color = "white";
    } else if (num === 3) {
        color = "red";
    } else {
        color = "green";
    }

    return "The color is " + color;
}

console.log(calculaColor(1));
console.log(calculaColor(2));
console.log(calculaColor(3));
console.log(calculaColor(8));
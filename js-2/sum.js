const sum = function (array) {

    if (array.length === 0) return 0;

    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter += array[i];
    }

    return counter;
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0
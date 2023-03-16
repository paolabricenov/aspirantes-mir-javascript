const max = function (array) {
    if (array.length === 0) return undefined;

    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
}


console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined
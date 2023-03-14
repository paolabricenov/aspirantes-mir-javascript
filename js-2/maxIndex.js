const maxIndex = function (array) {
    if (array.length === 0) return -1;

    let max_index = 0;
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            max_index = i;
        }
    }
    return max_index;
}

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1
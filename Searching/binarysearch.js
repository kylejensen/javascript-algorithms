// Iterative version

let binarySearch = (arr, key) => {
    let max = arr.length - 1,
        min = 0,
        guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);

        if (arr[guess] === key) {
            return key + " found at position " + guess;
        } else if (arr[guess] < key) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
    return -1;
};

// Recursive version

let binarySearchRecursive = (arr, key, min, max) => {
    if (max < min) {
        return -1;
    } else {
        let guess = Math.floor((min + max) / 2);
        if (arr[guess] === key) {
            return key + " found at position " + guess;
        } else if (arr[guess] < key) {
            return binarySearchRecursive(arr, key, guess + 1, max);
        } else {
            return binarySearchRecursive(arr, key, min, guess - 1);
        }
    }
};

let myArr = [1,2,3,4,5,6,7,8,9,10,13,15,17,19,20,40,56,70];

console.log(binarySearch(myArr, 4)); // 4 found at position 3
console.log(binarySearchRecursive(myArr, 17, 0, myArr.length - 1)); // 17 found at position 12

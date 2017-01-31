function binarySearch(arr, val) {
    var min = 0,
        max = arr.length - 1,
        guess;

    while (min <= max) {
        guess = Math.floor(max + min / 2);
        if (arr[guess] === val) {
            return val + " found at position " + guess;
        } else if (arr[guess] < val) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }

    return -1; // Error
}

var myArr = [1,2,3,4,5,6,7,8,9,10,13,15,17,19,20,40,56,70];

binarySearch(myArr, 1); // 1 found at position 0

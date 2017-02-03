/*
* Counting Sort Algorithm in JavaScript
* Worst-Case O(n + k)
*/

var countingSort = function countingSort (arr, min, max) {
    var i,
        j = 0,
        len = arr.length,
        count = [];

    for (i = min; i <= max; i++) {
        count[i] = 0;
    }

    for (i = 0; i < len; i++) {
        count[arr[i]]++
    }

    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[j++] = i;
        }
    }

    return arr;
}

var myArray = [1,12,3,7,3,1,4,6,8,2];

// 2nd parameter is the min value of the array,
// 3rd is the max value of the array

console.log(countingSort(myArray, 1, 12)); // [ 1, 1, 2, 3, 3, 4, 6, 7, 8, 12 ]

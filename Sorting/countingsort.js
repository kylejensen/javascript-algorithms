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

var myArray = [0, -5, 14, 23, -24, 4, 190, 0, 0, 0];

// 2nd parameter is the min value of the array,
// 3rd is the max value of the array

countingSort(myArray, -24, 190); // [ -24, -5, 0, 0, 0, 0, 4, 14, 23, 190 ]

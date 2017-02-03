/*
* Counting Sort Algorithm in JavaScript
* Worst-Case O(n + k)
*/

var countingSort = function countingSort (arr, min, max) {
    var storageArr = [],
        outputArr = [];
    for (var i = 0; i <= max; i++) {
        storageArr[i] = 0;
    }
    for (var j = 1; j <= arr.length; j++) {
        storageArr[arr[j]] = storageArr[arr[j]] + 1;
    }
    for (i = 1; i <= max; i++) {
        storageArr[i] = storageArr[i] + storageArr[i - 1];
    }
    for (j = arr.length - 1; j >= 0; j--) {
        outputArr[storageArr[arr[j]]] = arr[j];
        storageArr[arr[j]] = storageArr[arr[j]] - 1;
    }
    return outputArr;
}

var myArray = [1,12,3,7,3,1,4,6,8,2];

// 2nd parameter is the min value of the array,
// 3rd is the max value of the array

countingSort(myArray, 1, 12); // [ 1, 1, 2, 3, 3, 4, 6, 7, 8, 12 ]

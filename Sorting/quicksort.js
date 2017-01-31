/*
* Quick Sort Algorithm in JavaScript
* Average O(n log n)
*/

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
        partitionIndex = left,
        i;

    for (i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, i, partitionIndex);
    return partitionIndex;
}

function quickSort(arr, left, right) {
    var pivot,
        partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

// Calling the function - Method 1
var myArray = [9,2,60,125,7,3,1,4,7,2,8];
quickSort(myArray, 0, myArray.length - 1); // [ 1, 2, 2, 3, 4, 7, 7, 8, 9, 60, 125 ]

// Calling the function - Method 2 (Third paramater is the length of the array minus 1)
quickSort([9,2,60,125,7,3,1,4,7,2,8], 0, 10); // [ 1, 2, 2, 3, 4, 7, 7, 8, 9, 60, 125 ]

/*
* Counting Sort Algorithm in JavaScript
* Worst-Case O(n + k)
*/

let countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];

    for (i; i <= max; i++) {
        count[i] = 0;
    }

    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }

    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }

    return arr;
};

let myArray = [0, -5, 14, 23, -24, 4, 190, 0, 0, 0];

// 2nd parameter is the min value of the array,
// 3rd is the max value of the array

countingSort(myArray, -24, 190); // [ -24, -5, 0, 0, 0, 0, 4, 14, 23, 190 ]

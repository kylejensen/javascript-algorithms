/*
* Selection Sort Algorithm in JavaScript
* Worst-Case O(n²)
*/

function selectionSort(arr) {
    var len = arr.length;
    var i, j, min;
    for (i = 0; i < len; i++) {
        min = i;
        for (j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (min !== i) {
            var tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

selectionSort([4,2,6,8,3,9,0,1,2,5,0,123,12,6,32,7,2]); // [ 0, 0, 1, 2, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 12, 32, 123 ]

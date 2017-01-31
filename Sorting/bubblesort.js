/*
* Bubble Sort Algorithm in JavaScript
* Worst-Case O(n²)
*/

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = (len - 1); i >= 0; i--) {
        for (var j = (len - 1); j >= 0; j--) {
            if (arr[j] < arr[j - 1]) {
                var tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }
    return arr;
}

bubbleSort([22,4,10,6,2,34,8,0,57,4,3,81]); // [ 0, 2, 3, 4, 4, 6, 8, 10, 22, 34, 57, 81 ]

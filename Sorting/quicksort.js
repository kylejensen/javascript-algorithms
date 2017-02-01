/*
* Quick Sort Algorithm in JavaScript
* Worst-Case O(n²)
*/

var swap = function (arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

var partition = function (arr, p, r) {
    var q = p,
        j;
    for (j = p; j < r; j = j + 1) {
        if (arr[j] < arr[r]) {
            swap(arr, j, q);
            q = q + 1;
        }
    }
    swap(arr, j, q);
    return q;
};

var quickSort = function (arr, p, r) {
    if (p < r) {
        var q = partition(arr, p, r);
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
        return arr;
    }
};

var myArr = [2,4,6,7,1,12,4,6,5,72,48,6,35,68,63842,57,68,65,3,6,3,23,5,7];

quickSort(myArr, 0, myArr.length - 1); //[ 1,2,3,3,4,4,5,5,6,6,6,6,7,7,12,23,35,48,57,65,68,68,72,63842]

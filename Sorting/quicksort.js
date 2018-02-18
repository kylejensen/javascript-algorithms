/*
* Quick Sort Algorithm in JavaScript
* Average-Case O(n log n)
* Worst-Case (rare) O(n²)
*/

let swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

let partition = (arr, low, high) => {
    let q = low,
        i;
    for (i = low; i < high; i++) {
        if (arr[i] < arr[high]) {
            swap(arr, i, q);
            q++;
        }
    }
    swap(arr, i, q);
    return q;
};

let quickSort = (arr, low, high) => {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
        return arr;
    }
};

let myArr = [2,4,6,7,1,12,4,6,5,72,48,6,35,68,63842,57,68,65,3,6,3,23,5,7];

quickSort(myArr, 0, myArr.length - 1); //[ 1,2,3,3,4,4,5,5,6,6,6,6,7,7,12,23,35,48,57,65,68,68,72,63842]

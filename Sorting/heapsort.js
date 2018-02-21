/*
* Heap Sort Algorithm in JavaScript
* Worst-Case O(n log n)
*/

let myArr = [-5, 0, 14, 16, 288, 1, 5012, 29, 4, -23],
    arrayLength;

let buildHeap = (arr) => {
    for (let i = Math.floor((arr.length / 2)); i >= 0; i--) {
        heapify(arr, i);
    }
};

let heapify = (arr, i) => {
    let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < arrayLength && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < arrayLength && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
};

let swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

let heapSort = (arr) => {
    buildHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        arrayLength--;
        heapify(arr, 0);
    }
    return arr;
};

heapSort(myArr); // [ -23, -5, 0, 1, 4, 14, 16, 29, 288, 5012 ]

/*
* Bubble Sort Algorithm in JavaScript
* Worst-Case O(n²)
*/

let bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};

let bubbleSort2 = (arr) => {
    let len = arr.length,
        swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};

bubbleSort([22,4,10,6,2,34,8,0,57,4,3,81]); // [ 0, 2, 3, 4, 4, 6, 8, 10, 22, 34, 57, 81 ]

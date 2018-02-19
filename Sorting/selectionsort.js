/*
* Selection Sort Algorithm in JavaScript
* Worst-Case O(n²)
*/

let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
};

selectionSort([4,2,6,8,3,9,0,1,2,5,0,123,12,6,32,7,2]); // [ 0, 0, 1, 2, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 12, 32, 123 ]

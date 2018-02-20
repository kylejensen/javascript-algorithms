/*
* Merge Sort Algorithm in JavaScript
* Worst-Case O(n log n)
*/

let merge = (left, right) => {
    let leftLen = left.length,
        rightLen = right.length,
        l = 0,
        r = 0,
        result = [];

    while (l < leftLen && r < rightLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
};

let mergeSort = (arr) => {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }

    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
};

mergeSort([9,3,1,28,5,6,2,3,5,8,4]); // [ 1, 2, 3, 3, 4, 5, 5, 6, 8, 9, 28 ]

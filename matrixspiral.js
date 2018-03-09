// Given a matrix of m * n elements (m rows, n columns),
// return all elements of the matrix in spiral order

let spiralOrder = (A) => {
    let rows = A.length,
        cols = A[0].length,
        t = 0, // top
        b = (rows - 1), // bottom,
        l = 0, // left
        r = (cols - 1), // right
        res = [],
        direction = 0; // 0 is right, 1 is down, 2 is left, 3 is up

        while (t <= b && l <= r) {
            if (direction === 0) {
                for (let i = l; i <= r; i++) {
                    res.push(A[t][i]);
                }
                t++;
                direction = 1;
            } else if (direction === 1) {
                for (i = t; i <= b; i++) {
                    res.push(A[i][r]);
                }
                r--;
                direction = 2;
            } else if (direction === 2) {
                for (i = r; i >= l; i--) {
                    res.push(A[b][i]);
                }
                b--;
                direction = 3;
            } else if (direction === 3) {
                for (i = b; i >= t; i--) {
                    res.push(A[i][l]);
                }
                l++;
                direction = 0;
            }
        }
        return res;
};

// Tests
let arr1 = [[1,2],[3,4],[5,6]];
let arr2 = [[2,4,6,8],[5,9,12,16],[2,11,5,9],[3,2,1,8]];
console.log(spiralOrder(arr1));
console.log(spiralOrder(arr2));
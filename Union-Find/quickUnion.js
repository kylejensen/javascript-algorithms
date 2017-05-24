/*
    Weighted Quick Union + Path Compression implementation in JavaScript
*/

function QuickUnion (size) {
    this.id = [];
    for (var i = 0; i < size; i++) {
        this.id[i] = i;
    }
}

QuickUnion.prototype.union = function (a, b) {
    var aRoot = this.root(a),
        bRoot = this.root(b);

    this.id[aRoot] = bRoot;
};

QuickUnion.prototype.root = function (a) {
    while (a != this.id[a]) {
        a = this.id[a];
    }
    return a;
};

QuickUnion.prototype.connected = function (a, b) {
    return this.root(a) === this.root(b);
};

var qu = new QuickUnion(10);

qu.union(0, 1);
qu.union(5, 6);
qu.union(6, 7);
console.log('qu.connected(5, 7)', qu.connected(5, 7)); // true
console.log('qu.connected(0, 7)', qu.connected(0, 7)); // false
qu.union(5, 1);
console.log('qu.connected(0, 7)', qu.connected(0, 7)); // true
/*
    Weighted Quick Union + Path Compression implementation in JavaScript
    O(N + M lg* N)
*/

function WeightedQuickUnion (size) {
    this.id = [];
    this.size = [];
    for (var i = 0; i < size; i++) {
        this.id[i] = i;
        this.size[i] = 1;
    }
}

WeightedQuickUnion.prototype.union = function (a, b) {
    var aRoot = this.root(a),
        bRoot = this.root(b);

    if (aRoot === bRoot) {
        return;
    }

    if (this.size[aRoot] < this.size[bRoot]) {
        this.id[aRoot] = bRoot;
        this.size[bRoot] += this.size[aRoot];
    } else {
        this.id[bRoot] = aRoot;
        this.size[aRoot] += this.size[bRoot];
    }

    
};

WeightedQuickUnion.prototype.root = function (a) {
    while (a != this.id[a]) {
        this.id[a] = this.id[this.id[a]];
        a = this.id[a];
    }
    return a;
};

WeightedQuickUnion.prototype.connected = function (a, b) {
    return this.root(a) === this.root(b);
};

var wqu = new WeightedQuickUnion(10);

wqu.union(0, 1);
wqu.union(5, 6);
wqu.union(6, 7);
console.log('wqu.connected(5, 7)', wqu.connected(5, 7)); // true
console.log('wqu.connected(0, 7)', wqu.connected(0, 7)); // false
wqu.union(5, 1);
console.log('wqu.connected(0, 7)', wqu.connected(0, 7)); // true
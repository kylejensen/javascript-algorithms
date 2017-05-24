/*
    Quick Find implementation in JavaScript
    O(MN)
*/

function QuickFind (size) {
    this.id = [];
    for (var i = 0; i < size; i++) {
        this.id[i] = i;
    }
}

QuickFind.prototype.union = function (a, b) {
    var aID = this.id[a],
        bID = this.id[b],
        len = this.id.length;

    for (var i = 0; i < len; i++) {
        if (this.id[i] == aID) {
            this.id[i] = bID;
        }
    }
};

QuickFind.prototype.connected = function (a, b) {
    return this.id[a] === this.id[b];
};

var qf = new QuickFind(10);

qf.union(0, 1);
qf.union(5, 6);
qf.union(6, 7);
console.log('qf.connected(5, 7)', qf.connected(5, 7)); // true
console.log('qf.connected(0, 7)', qf.connected(0, 7)); // false
qf.union(5, 1);
console.log('qf.connected(0, 7)', qf.connected(0, 7)); // true
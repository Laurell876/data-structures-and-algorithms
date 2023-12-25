/**
 * @param {number} n
 * @return {number}
 */


/* PSEUDOCODE
    // examples
    if n = 0, output = 0
    if n = 1, output = 1
    if n = 2, output = 2,
    if n = 3, output = 5
    if n = 4, output = 14
    if n = 5, output = 42
*/


var numTrees = function(n) {
    return recur(0, n - 1);
};

const recur = (l, r) => {
    // our base case
    if(l >= r) return 1;

    let ways = 0;
    // choosing i as the root node of current subtree
    for(let i = l; i <= r; i++) {
        ways = ways + recur(l, i - 1) * recur(i + 1, r);
    }

    return ways;
}
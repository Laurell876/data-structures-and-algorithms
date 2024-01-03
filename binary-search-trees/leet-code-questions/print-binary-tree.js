/*
Given the root of a binary tree, construct a 0-indexed m x n string matrix res that represents a formatted layout of the tree. The formatted layout matrix should be constructed using the following rules:

The height of the tree is height and the number of rows m should be equal to height + 1.
The number of columns n should be equal to 2height+1 - 1.
Place the root node in the middle of the top row (more formally, at location res[0][(n-1)/2]).
For each node that has been placed in the matrix at position res[r][c], place its left child at res[r+1][c-2height-r-1] and its right child at res[r+1][c+2height-r-1].
Continue this process until all the nodes in the tree have been placed.
Any empty cells should contain the empty string "".
Return the constructed matrix res.

 Example 1:
 Input: root = [1,2]
Output: 
[["","1",""],
 ["2","",""]]

 Example 2:

 Input: root = [1,2,3,null,4]
Output: 
[["","","","1","","",""],
 ["","2","","","","3",""],
 ["","","4","","","",""]]
*/
const calculateHeight = (node) => {
  if (!node) return 0;
  else {
    let lHeight = calculateHeight(node.left);
    let rHeight = calculateHeight(node.right);

    if (lHeight > rHeight) {
      return lHeight + 1;
    } else {
      return rHeight + 1;
    }
  }
};

var printTree = function (root) {
  console.log("root: " + JSON.stringify(root));

  const height = calculateHeight(root) - 1;
  let numberOfColumns = Math.pow(2, height + 1) - 1;
  //let res = [height+1][numberOfColumns]
  //let res = []
  let rows = height + 1;
  let res = new Array(rows)
    .fill("")
    .map(() => new Array(numberOfColumns).fill(""));

  console.log("height: " + height);
  console.log("rows: " + rows);
  console.log("numberOfColumns: " + numberOfColumns);

  // Place the root node in the middle of the top row (more formally, at location res[0][(n-1)/2]).
  //res[0][(numberOfColumns-1)/2]

  /* PSEUDOCODE
    first place the root node using the given r and c values
    then using those r and c values place the left child and call the function again 
    then place the right child and call the function again
    */

  let r = 0;
  let c = (numberOfColumns - 1) / 2;

  //console.log("first r: " + r)
  //console.log("first c: " + c)

  updateMatrix(res, root, r, c, height);

  return res;
};

let updateMatrix = (res, node, r, c, height) => {
  try {
    // TODO: figure out when to stop running this function recursively since all the nodes have been added
    console.log("\n\n inside updateMatrix");
    if (node) {
      if (node.val) {
        console.log("r: " + r);
        console.log("c: " + c);
        res[r][c] = node.val.toString();
      }

      if (node.left) {
        // let result = (height) - r - 1
        // console.log("c: " + c)
        // console.log("r: " + r)
        //console.log("height: " + height)
        // console.log("result: " + result)
        // let pow = Math.pow(2, result)
        // console.log("pow: " + pow)
        // console.log("c: " + c)
        // c = (c -  pow)
        //console.log("c for left node: " + c)
        //  updateMatrix(res, node, r + 1, c - Math.pow(2, height - r - 1), height)

        // c = c - (Math.pow(2, height - r - 1))

        let initialC = c;
        console.log("initialC: " + initialC);
        c = initialC - Math.pow(2, height - r - 1);
        console.log("c: " + c);

        updateMatrix(res, node, r + 1, c, height);
      }

      if (node.right) {
        // c = (c + Math.pow(2, (height-r-1)))
        /// console.log("c for right node: " + c)
        // updateMatrix(res, node, r + 1, c, height)
      }
    }
  } catch (e) {
    console.log(e);
  }
};

printTree({ val: 1, left: { val: 2, left: null, right: null }, right: null });

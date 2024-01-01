/*

You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

Create a root node whose value is the maximum value in nums.
Recursively build the left subtree on the subarray prefix to the left of the maximum value.
Recursively build the right subtree on the subarray suffix to the right of the maximum value.
Return the maximum binary tree built from nums.

 

Example 1:

Input: nums = [3,2,1,6,0,5]
Output: [6,3,5,null,2,0,null,null,1]
Explanation: The recursive calls are as follow:
- The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5].
    - The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1].
        - Empty array, so no child.
        - The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1].
            - Empty array, so no child.
            - Only one element, so child is a node with value 1.
    - The largest value in [0,5] is 5. Left prefix is [0] and right suffix is [].
        - Only one element, so child is a node with value 0.
        - Empty array, so no child.



Example 2:

Input: nums = [3,2,1]
Output: [3,null,2,null,1]

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 1000
All integers in nums are unique.


*/

/*
Solution explained:
All I'm doing is following the pattern and constructing a tree recursively. 

1. get the largest number in the array,
2. split the array into two parts. prefix to the left of the largest and suffix to the right.
3. use the largest number to create the root node in the tree
4. generate the left branch of the tree by recursively going back to step 1 using the left prexix as the array
5. generate the right branch of the tree by recursively going back to step 1 using the right suffix as the array

*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var constructMaximumBinaryTree = function (nums) {
  let tree = subFunc(nums);
  console.log("tree: " + JSON.stringify(tree));

  return tree;
};

let subFunc = (array) => {
  if (array.length === 0) {
    return null;
  } else if (array.length === 1) {
    return new TreeNode(array[0]);
  }

  let { largestValue, largestValueIndex } = getLargestValueAndIndex(array);

  let node = new TreeNode(largestValue);

  let leftPrefix = array.slice(0, largestValueIndex);

  let rightSuffix = array.slice(largestValueIndex + 1, array.length);

  node.left = subFunc(leftPrefix);
  node.right = subFunc(rightSuffix);

  return node;
};

let getLargestValueAndIndex = (array) => {
  let largestValue = -1;
  let largestValueIndex = 0;

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (current > largestValue) {
      largestValue = current;
      largestValueIndex = i;
    }
  }

  return {
    largestValue,
    largestValueIndex,
  };
};

constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);

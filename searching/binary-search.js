/*
Binary Search Exercise
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/

function binarySearch(arr, value) {
  // add whatever parameters you deem necessary - good luck!

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.ceil((start + end) / 2);

    let midVal = arr[mid];

    if (midVal === value) {
      return mid;
    } else if (arr[mid] < value) {
      start++;
    } else {
      end--;
    }
  }

  return -1;
}

const result = binarySearch([1, 2, 3, 4, 5], 5);

console.log(result);

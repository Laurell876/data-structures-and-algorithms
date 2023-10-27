/*
This accumulates the sorted data at the beginning of the array.
go all the way through on each run, find the minimum value and put it at the front.
You're selecting the minimum value and putting it at the front, for each run in the array.

in the first run find the minimum value from index 0 to the end of the array and put it at the first index,
in the second run find the minimum value from index 1 to the end of the array and put it at the second index

After each run you'd increase a start pointer that tells you where to put the minimum.
*/

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    if (i !== minimumIndex) {
      let temp = array[i];
      array[i] = array[minimumIndex];
      array[minimumIndex] = temp;
    }
  }
};

let array = [900, -50, 1230, -500, 92,34,2341,2335,677,-34,567,-99665]
selectionSort(array);
console.log(array);

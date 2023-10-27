/*
This Builds the sort by gradually creating a larger left half which is always sorted. Half should actually be called "part" of the array, since it's not necessarily half.
It takes each element and places it where it needs to go in the sorted half.

pseudocode
start by picking the second element in the array.
compare  it to the one before it and if necessary, you swap
continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
repeat until the array is sorted.

*/

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let currentVal = array[i]
        for (let j = i - 1; j >= 0 && array[j] > currentVal; j--) { // you only need to keep decrementing if the preceeding value is greater than the current one, if it isn't then that half is already sorted and nothing needs to be done.
            let temp = array[j+1]
            array[j+1] = array[j]
            array[j] = temp
        }
    }
    return array;
}

let array = [900, -50, 1230, -500, 92,34,2341,2335,677,-34,567,-99665]
console.log(insertionSort(array))



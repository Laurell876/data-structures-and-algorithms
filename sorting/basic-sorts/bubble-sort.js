/*
This loops through the entire algorithm multiple times. With the highest values "bubbling" to the top.
In the first run you compare the first value to the second and if the first value is larger you swap, do this continuously until you reach the end of the array.
The next run will repeat this process however, it won't go to the end of the array instead it will go to end of array - 1.

One way to optimize this is by exiting the loop if no swaps have been made in an entire run. that means the array has been sorted
*/

const bubbleSort = (array) => {
    let noSwaps;
    for (let i = 0; i < array.length; i++) {
        noSwaps = true
        for (let j = 0; j < array.length - i; j++) { // (-i) is added since the values at the end of the arra are already sorted in place
           // console.log(array[j],array[j+1])

            if (array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                noSwaps = false
            }

        }
        if (noSwaps) break
    }
}


let array = [900, -50, 1230, -500, 92,34,2341,2335,677,-34,567,-99665]
bubbleSort(array)
console.log(array)
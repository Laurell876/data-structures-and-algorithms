class MaxBinaryHeap {
    constructor() {
        /*
        when storing a max binary heap in an array the following rule applies:
        for a number at index "n",
        it's left child is at index "2n+1" and its right child is at index "2n + 2"

        to get the parent of a child at index n use the following formula Math.floor((n-1)/2 )
        */
        this.values = []
    }
    insert(value) {
        // first add the new number to the end of the array
        this.values.push(value)

        // then bubble the new value into it's correct position
        // add it to the end then check if the parent is smaller than it, if necessary swap
        // then check the new parent and see if that needs to be swapped
        // do this until the new value is at the right index
        let newItemIndex = this.values.length - 1 // new item starts out at the end
        let parentIndex = Math.floor((newItemIndex - 1) / 2)

        console.log("parentIndex: " + parentIndex)
        console.log("newItemIndex: " + newItemIndex)
        

        while (this.values[parentIndex] < this.values[newItemIndex]) {

            let temp = this.values[parentIndex]
            let tempIndex = parentIndex
            this.values[parentIndex] = this.values[newItemIndex]
            this.values[newItemIndex] = temp

           // parentIndex = newItemIndex
            newItemIndex = tempIndex
            parentIndex = Math.floor((newItemIndex - 1) / 2)
        }

        return this
    }
}

let heap = new MaxBinaryHeap()
heap.values = [41,39,33,18,27,12]

heap.insert(55)

console.log(heap)
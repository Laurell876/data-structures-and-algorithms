class Node {
  constructor(value) {
    this.value = value;
    this.left = null; // has smaller value
    this.right = null; // has larger value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (newNode.value === current.value) {
          // This tree ignores duplicates, a counter can be added to nodes in the future
          return this;
        } else if (newNode.value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (newNode.value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  search(value) {
    // checks if a value exists in a tree
    let current = this.root;
    while (current != null) {
      console.log("searching");
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
    }
    return -1;
  }
  breadthFirstSearch() {
    // complete each horizontal level before going down a depth
    let queue = []; // push adds to back, shift removes from front
    let visited = []; // shows order in which values were searched

    let current = this.root;
    queue.push(current);

    while (queue.length > 0) {
      const removedVal = queue.shift(); // gets first element
      visited.push(removedVal.value);

      // if it has a left value add it to the queue
      if (removedVal.left) queue.push(removedVal.left);

      // if it has a right value add it to the queue
      if (removedVal.right) queue.push(removedVal.right);
    }

    return visited;
  }

  preOrderTraversal(node, visited) {
    if (node === null) return visited
    else {
        visited.push(node.value);
        this.preOrderTraversal(node.left, visited)
        this.preOrderTraversal(node.right, visited)
    }
    return visited;
  }
  postOrderTraversal(node, visited) {
    if (node === null) return visited
    else {
        this.postOrderTraversal(node.left, visited)
        this.postOrderTraversal(node.right, visited)
        visited.push(node.value);
    }
    return visited;
  }
  inOrderTraversal(node, visited) {
    if (node === null) return visited
    else {
        this.inOrderTraversal(node.left, visited)
        visited.push(node.value);
        this.inOrderTraversal(node.right, visited)
    }
    return visited;
  }
  dfsPreOrder() {
    // pre-order depth first search
    // first visit the node, then its entire left side,
    // then visit its entire right side

    let visited = []; // shows order in which values were searched
    this.preOrderTraversal(this.root, visited)
    return visited;
  }
  dfsPostOrder() {
    // post-order depth first search
    // first visit the left side, then the entire right side
    // then visit the node

    let visited = []; // shows order in which values were searched
    this.postOrderTraversal(this.root, visited)
    return visited;
  }

  dfsInOrder() {
    // in-order depth first search
    // traverse entire left
    // visit the node
    // traverse entire right side
    let visited = []; // shows order in which values were searched
    this.inOrderTraversal(this.root, visited)
    return visited;
  }

}

let tree = new BinarySearchTree();

const values = [10, 6, 15, 3, 8, 20];
values.forEach((item) => {
  tree.insert(item);
});


console.log(JSON.stringify(tree.dfsPreOrder()));
console.log(JSON.stringify(tree.dfsPostOrder()));
console.log(JSON.stringify(tree.dfsInOrder()));
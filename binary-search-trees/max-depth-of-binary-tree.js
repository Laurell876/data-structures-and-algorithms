const maxDepth = (root) => { // root has val, left and right properties
    if (root === null) {
        return 0;
    }
    return iterateTree(root, 1);
};

const iterateTree = (root, level) => {
    const isLeftTreeMissing = root.left === null;
    const isRightTreeMissing = root.right === null
    
    let leftLevel = level;
    let rightLevel = level;
    
    if (isLeftTreeMissing === false) {
        // traverse the entire left tree
        leftLevel = iterateTree(root.left, level + 1);
    }
    if (isRightTreeMissing === false) {
        // traverse the entire right tree
        rightLevel = iterateTree(root.right, level + 1);
    }

    // return the larger length between the two sub-trees
    return leftLevel > rightLevel ? leftLevel : rightLevel;
};
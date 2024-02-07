class Node {

    data;
    left;
    right;

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root;
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root)this.root = newNode;
        else this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else if (newNode.value > node.value) {
            if (!node.right) node.right = newNode;
            else this.insertNode(node.right, newNode);
        } 
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (!node) return false;

        if (node.value === value) return true;
        else if (value < node.value) return this.searchNode(node.left, value);
        else return this.searchNode(node.right, value);
    }

  // Additional methods like search, delete, traverse, etc. can be added here
}


export const playWithBinaryTrees = () => {
    const binaryTree = new BinaryTree();

    binaryTree.insert(10);
    binaryTree.insert(5);
    binaryTree.insert(15);

    // const arr = [12, 23, 34, 544, 23, 876, 56];
    // arr.forEach(element => {
    //     binaryTree.insert(element);
    // });

    console.log(binaryTree.search(5));
}

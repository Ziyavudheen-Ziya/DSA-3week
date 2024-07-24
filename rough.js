class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (newNode.value > root.value) {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }

    if (root.value === value) {
      return true;
    } else if (root.value > value) {
      return this.search(root.left, value);
    } else if (root.value < value) {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      let curr = queue.shift();

      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 8));

console.log("PREORDER===============================PREORDER");
bst.preOrder(bst.root);
console.log("PREORDER=======================================PREOREDR");
console.log("INORDER===================================INORDER");
bst.inOrder(bst.root);
console.log("INORDER========================================INORDER");
console.log("POSTORDER======================================POSTORDER");
bst.postOrder(bst.root);
console.log("POSTORDER=========================================POSTORDER");
console.log("===========================BFS================================");
bst.levelOrder();

console.log("======min============");
console.log(bst.min(bst.root));

console.log(bst.max(bst.root));

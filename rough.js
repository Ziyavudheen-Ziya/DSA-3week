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

  isEmpty() {
    return this.root === null;
  }

  insert(element) {
    let newNode = new Node(element);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  levelOrder() {
    let queue = [];

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

  preorder(root){

     if(root){
         
       console.log(root.value);
       this.preorder(root.left)
       this.preorder(root.right)
     }
  }

  inOrder(root){
    if(root){
      this.inOrder(root.left)
      console.log(root.value);
      this.inOrder(root.right)

    }
    
  }

  postOrder(root){

     if(root){

       this.postOrder(root.left)
       this.postOrder(root.right)
       console.log(root.value);
     }
  }
}

let bst = new BinarySearchTree();

bst.insert(50);
bst.insert(15);
bst.insert(9);
bst.insert(7);
bst.insert(18);
bst.insert(3);

// console.log(bst.root);

console.log("============BFS==================");
bst.levelOrder();
console.log("=================BFS================");

bst.preorder(bst.root)
console.log('============================');

bst.inOrder(bst.root)

console.log("===============");

bst.postOrder(bst.root)
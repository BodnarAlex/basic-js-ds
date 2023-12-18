const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.first = null;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.first;
  }

  add(data) {
    let addNode = new Node(data);

    if (this.first === null) {
      this.first = addNode;
    } else {
      this.insertNode(this.first, addNode);
    }
  }

  insertNode(root, addNode) {
    if (addNode.data < root.data) {
      if (root.left === null) {
        root.left = addNode;
      } else {
        this.insertNode(root.left, addNode);
      }
    } else {
      if (root.right === null) {
        root.right = addNode;
      } else {
        this.insertNode(root.right, addNode);
      }
    }
  }

  has(data, node = this.first) {
    if (node === null) {
      return false;
    } else {
      if (node.data === data) {
        return true;
      } else if (node.data > data) {
        return this.has(data, node.left);
      } else {
        return this.has(data, node.right);
      }
    }
  }

  find(data, node = this.first) {
    if (node === null) {
      return null;
    } else {
      if (node.data === data) {
        return node;
      } else if (node.data > data) {
        return this.find(data, node.left);
      } else {
        return this.find(data, node.right);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}



module.exports = {
  BinarySearchTree
};
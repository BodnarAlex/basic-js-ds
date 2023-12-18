const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.first = null;
  }

  root() {
    return this.first;
  }

  add(data) {
    let addNode = new Node(data);

    if (this.first === null)
      this.first = addNode;
    else
      this.insertNode(this.first, addNode);
  }

  insertNode(root, addNode) {
    if (addNode.data < root.data) {
      if (root.left === null)
        root.left = addNode;
      else
        this.insertNode(root.left, addNode);
    } else {
      if (root.right === null)
        root.right = addNode;
      else
        this.insertNode(root.right, addNode);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, node = this.first) {
    if (node === null)
      return null;

    if (node.data === data)
      return node;
    else if (node.data > data)
      return this.find(data, node.left);
    else
      return this.find(data, node.right);
  }

  remove(data) {
    this.first = this.delete(this.first, data);
  }

  delete(node, data) {
    if (node === null)
      return node;

    if (data < node.data) {
      node.left = this.delete(node.left, data);
    } else if (data > node.data) {
      node.right = this.delete(node.right, data);
    } else {
      //здесь нашли узел
      if (!node.left && !node.right)
        return null;

      if (!node.left)
        return node.right;
      else if (!node.right)
        return node.left;
      node.data = this.min(node.right);
      node.right = this.delete(node.right, node.data)
    }
    return node;
  }


  min(node = this.first) {
    if (node == null)
      return null;

    if (node.left === null)
      return node.data;
    else
      return this.min(node.left);
  }

  max(node = this.first) {
    if (node == null)
      return null;

    if (node.right === null)
      return node.data;
    else
      return this.max(node.right);
  }
}

module.exports = {
  BinarySearchTree
};
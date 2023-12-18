const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let nowItem = l;
  while(nowItem !== null){
    //первый элемент равен искомому (первые)
    if(nowItem.next === l.next && nowItem.value === k){
      l = nowItem.next;
    }
    //последний элемент равен искомому
    if(nowItem.next !== null && (nowItem.next.next === null && nowItem.next.value === k)){
      nowItem.next = null;
    }
    //элемент не равен искомому, но следующий равен
    if(nowItem.next !== null && (nowItem.next.next !== null && nowItem.next.value === k)){
      nowItem.next = nowItem.next.next;
      if( nowItem.next.value === k){
        nowItem.next = nowItem.next.next;
      }
    }

    nowItem = nowItem.next;

  }
  return l;
}

module.exports = {
  removeKFromList
};

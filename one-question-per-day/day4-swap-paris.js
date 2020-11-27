var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};


// //定义节点
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// //定义链表
// //链表中有头结点和一些方法
// function LinkedList() {
//   this.head = new ListNode("head");
//   this.find = find;
//   this.insert = insert;
//   this.remove = remove;
//   this.show = show;
//   this.findFront = findFront;
// }

// //定义一些方法
// //查找节点
// function find(item) {
//   var curNode = this.head;
//   while (curNode.val != item) {
//     curNode = curNode.next;
//   }
//   return curNode; //找到就返回结点数据，没有就返回null
// }

// //插入节点
// function insert(newElement, item) {
//   //插入的节点，和位置
//   var newNode = new ListNode(newElement);
//   var curNode = this.find(item);
//   var nextNode = curNode.next;
//   // newNode.next = curNode.next;
//   curNode.next = newNode;
//   newNode.next = nextNode;
// }
// //找到前节点
// function findFront(item) {
//   var curNode = this.head;
//   if (curNode.next.val != item) {
//     curNode = curNode.next;
//   }
//   return curNode;
// }
// //删除节点
// function remove(item) {
//   var frontNode = this.findFront(item);
//   var curNode = this.find(item);
//   frontNode.next = curNode.next;
// }
// //遍历节点
// function show() {
//   var curNode = this.head,
//     result = "";
//   while (curNode.next != null) {
//     result += curNode.next.val;
//     curNode = curNode.next;
//   }
//   return result;
// }

// var list = new LinkedList();
// list.insert("a", "head");
// list.insert("b", "a");
// list.insert("c", "b");
// console.log(list.show());
// list.remove("b");
// console.log(list.show());

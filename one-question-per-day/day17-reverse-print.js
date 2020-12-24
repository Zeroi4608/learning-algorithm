/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let res = [];
    const loop = (head) => {
        if(head === null) {
            return;
        }
        res.push(head.val)
        loop(head.next);
    }
    loop(head);
    return res.reverse();
};

var reversePrint = function(head) {
    let res = [];
    const loop = (head) => {
        if(head === null) {
            return
        }
        res.unshift(head.val)
        loop(head.next)
    }
    loop(head);
    return res;
};
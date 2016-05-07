/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var cur = head;
    while (cur) {
        if (cur.vis) return true;
        cur.vis = true;
        cur = cur.next;
    }
    return false;
};
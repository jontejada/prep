/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
	var level = 0; // nodes at level is 2^n
	var pos = 1;
	var queue = [root];
	var cur;
	var prev;
	while(queue.length) {
		cur = queue.pop();
		if (cur) {
		    queue.unshift(cur.right, cur.left);
		if (Math.pow(2,level) - pos === 0) {
			cur.next = null;
			level++;
			pos = 1;
			prev = null;
			continue;
		}
		pos++;
		if (prev) {
			prev.next = cur;
		}
		prev = cur;

		}
	}
};


//not working yet
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root || root.length === 0) return root;
	var queue = [root]; //shift and push
	var cur;
	var tmp;
	while(queue.length) {
		cur = queue.shift();
		tmp = cur.left;
		cur.left = cur.right;
		cur.right = tmp;
		if (cur.left) {
			queue.push(cur.left);
		}
		if (cur.right) {
			queue.push(cur.right);
		}
	}
	return root;
}; 

// function swap(left,right) {
// 	var temp = left;
// 	left = right;
// 	right = temp;
// }
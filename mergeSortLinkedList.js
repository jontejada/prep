function mergeSort(head) {
	if (!head || !head.next) { //base case
		return head;
	}
	var mid = getMid(head); //call helper function
	var sHalf = mid.next; //head of second list
	mid.next = null; //break list at midpoint
	return merge(mergeSort(head), mergeSort(sHalf)); //recursive call
}

function merge(a, b){
	var dummyHead = {};
	var cur = dummyHead;
	while(a && b) {
		if (a.val < b.val) {
			cur.next = a;
			a = a.next;
		} else {
			cur.next = b;
			b = b.next;
		}
		cur.next = (!a ? b : a); //unnecessary parens? yes. conditional operator has higher precedence than assignment operator. both are right to left associativity, but that does not matter here. 
		return dummyHead.next;
	}
}

function getMid(head) {
	if (!head) {
		return head;
	}
	var slow = head;
	var fast = head;
	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

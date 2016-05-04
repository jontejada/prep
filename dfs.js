///////////////////////////////////////////////////////////////////////
//iterative DFS (using stack (using stackQueue (using linkedList)))
'use strict';

var Stack = require('../../../lib/dataStructures/stack.js');

var depthFirstSearch = function(root, matches) {
  //initialize stack built from a linked list
  var nodeStack = new Stack();

  //found function that takes 
  var found = function(node) {
    if (node === null) { return false; }

    if (!node.visited) {
      node.visited = true;
      nodeStack.push(node);
    }

    return matches(node.data);
  };

  if (found(root)) {
    return true;
  }

  while (!nodeStack.isEmpty()) {
    var node = nodeStack.pop();

    if(found(node.left)) {
      return true;
    }
    if(found(node.right)) {
      return true;
    }
  }

  return false;
};

module.exports = depthFirstSearch;

///////////////////////////////////////////////////////////////////////
//stack
'use strict';

var stackQueue = require('./stackQueue.js');

var stack = function() {
  stackQueue.apply(this, arguments);
};

stack.prototype = new stackQueue();

stack.prototype.getNext = function() {
  return this.list.end.data;
};

module.exports = stack;

///////////////////////////////////////////////////////////////////////
//stackQueue
'use strict';

var linkedList = require('./linkedList.js');

var stackQueue = function(){
  this.list = new linkedList();
  this.length = 0;
};

stackQueue.prototype.push = function(data) {
  this.list.add(data);
  this.length++;
};

stackQueue.prototype.pop = function() {
  if (this.isEmpty()) { throw new Error('The stack/queue is empty'); }

  var results = this.peek();

  this.list.remove(results);
  this.length--;
  return results;
};

stackQueue.prototype.isEmpty = function() {
  return this.length === 0;
};

stackQueue.prototype.clear = function() {
  this.list = new linkedList();
  this.length = 0;
};

stackQueue.prototype.peek = function() {
  return this.isEmpty() ? null : this.getNext();
};

module.exports = stackQueue;

///////////////////////////////////////////////////////////////////////
//linkedList
'use strict';

var node = function(data) {
  this.next = null;
  this.data = data;
};

var linkedList = function() {
  this.start = null;
  this.end = null;
  this.length= 0;
};

linkedList.prototype.add = function(data) {
  if (data === undefined) { throw new Error('data must be valid to add'); }

  var newNode = new node(data);

  if (this.start === null) {
    this.start = newNode;
  } else {
    this.end.next = newNode;
  }

  this.length++;
  this.end = newNode;
};

linkedList.prototype.remove = function(data) {
  if (data === undefined) { throw new Error('data must be valid to add'); }
  if (this.start === null) { return; }

  var previous = null;
  var current = this.start;

  while ((current !== null) && (current.data !== data)) {
    previous = current;
    current = current.next;
  }

  if (current !== null) {
    if (previous === null) {
      this.start = this.start.next;
    }
    if (current.next === null) {
      this.end = previous;
      if(this.end !== null) {
        this.end.next = null;
      }
    }
    if ((previous !== null) && (current.next !== null)) {
      previous.next = current.next;
    }
    this.length--;
  }
};

module.exports = linkedList;


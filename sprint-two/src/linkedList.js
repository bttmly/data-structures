var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node2( value );
    if ( this.tail ) {
      var oldTail = this.tail;
      oldTail.next = node;
    }
    if ( !this.head ) {
      this.head = node;
    }
    this.tail = node;
  };

  list.removeHead = function(){
    var oldHead = this.head;
    this.head = oldHead.next;
    return oldHead.value;
  };

  list.contains = function(target){
    var currentNode = this.head;
    do {
      if ( currentNode.value === target ) {
        return true;
      }
    } while ( currentNode = currentNode.next );
    return false;
  };

  return list;
};

var Node2 = function(value){
  this.value = value;
  this.next = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

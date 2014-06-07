var makeDoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = makeNode( value );
    if ( this.tail ) {
      var oldTail = list.tail;
      oldTail.next = newTail;
      newTail.previous = oldTail;
    }
    this.tail = newTail;
    if ( !this.head ) {
      this.head = newTail;
    }
    return newTail;
  };

  list.addToHead = function(value){
    var newHead = makeNode( value );
    if ( this.head ) {
      var oldHead = list.head;
      oldHead.previous = newHead;
      newHead.next = oldHead;
    }
    this.head = newHead;
    if ( !this.tail ) {
      this.tail = newHead;
    }
    return newHead;
  };

  list.insertAfter = function( value, node ){
    if ( this.containsNode( node ) ) {
      newNode = makeNode( value );
      newNode.previous = node;
      newNode.next = node.next;
      node.next = newNode;
      return newNode;
    } else { return false; }
  };

  list.insertBefore = function( value, node ){
    if ( this.containsNode( node ) ) {
      newNode = makeNode( value );
      newNode.next = node;
      newNode.previous = node.previous;
      node.previous = newNode;
      return newNode;
    } else { return false; }
  };

  list.removeHead = function(){
    if ( !this.head ) return false;
    var result = this.head;
    this.head = result.next;
    result.next = null;
    return result.value;
  };

  list.removeTail = function(){
    if ( !this.tail ) return false;
    var result = this.tail;
    this.tail = result.previous;
    result.previous = null;
    return result.value;
  }

  list.containsNode = function( node ){
    cNode = this.head;
    while ( cNode ) {
      if ( cNode === node ) {
        return true;
      }
      cNode = cNode.next;
    }
    return false;
  };

  list.contains = function(target){
    if ( !this.head ) return false;
    var node = this.head;
    do {
      if ( node.value === target ) {
        return true
      }
    } while ( node = node.next )
    return false;
  };

  list.getAtIndex = function( index ){
    var i = 0;
    var node = this.head;
    while ( i < index ) {
      node = node.next;
      i++;
    }
    return node;
  }

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

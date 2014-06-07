var makeRecursiveLL = function(value){
  var list = {};
  list.next = null;
  list.value = value;

  list.addToTail = function(value){
    if ( this.next ) {
      this.next.addToTail(value);
    } else {
      this.next = makeRecursiveLL(value);
    }
  };

  list.tail = function(value){
    if ( this.next ) {
      return this.next.tail()
    } else {
      return this;
    }
  }

  list.head = function(){
    return this;
  }

  list.removeHead = function(){
    if ( this.next ) {
      this.value = this.next.value;
      return this.next.removeHead();
    } else {
      this.next = null;
      return this.value;
    }
  };

  list.contains = function(target){
    if ( this.value === target ) {
      return true;
    } else if ( this.next ) {
      return this.next.contains(target);
    } else {
      return false;
    }
  };

  return list;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

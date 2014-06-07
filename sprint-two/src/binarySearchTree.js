var makeBinarySearchTree = function(value){
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var bstMethods = {
  insert: function(value){
    var newBst = makeBinarySearchTree(value);
    if ( newBst.value < this.value ) {
      if ( this.left ) {
        this.left.insert( newBst.value );
      } else {
        this.left = newBst;
      }
    } else {
      if ( this.right ) {
        this.right.insert( newBst.value );
      } else {
        this.right = newBst;
      }
    }
  },

  contains: function(value){
    if ( this.value === value ) { return true; }
    if ( value > this.value ) {
      if ( !this.right ) {
        return false;
      } else {
        return this.right.contains( value );
      }
    } else {
      if ( !this.left ) {
        return false;
      } else {
        return this.left.contains( value );
      }
    }
  },

  depthFirstLog: function( fn ){
    fn.call( null, this.value );
    if ( this.left ) {
      this.left.depthFirstLog( fn );
    }
    if ( this.right ) {
      this.right.depthFirstLog( fn );
    }
  },

  remove: function( value ) {
    var match;
    if ( value > this.value ) {
      if ( this.right ) {
        if ( this.right.value === value ) {
          match = this.right;
          this.right = match.right;
          if ( match.left ) {
            this.right.insert( match.left.value );
          }
        } else {
          this.right.remove( value );
        }
      }
    } else {
      if ( this.left ) {
        if ( this.left.value === value ) {
          match = this.left;
          this.left = match.left;
          if ( match.right ) {
            this.left.insert( match.right.value );
          }
        } else {
          this.left.remove( value );
        }
      }
    }
  },
  depth : function() {
    if (this.left === null && this.right === null) {
      return 1;
    } else if (this.left === null) {
      return 1 + this.right.depth();
    } else if (this.right === null) {
      return 1 + this.left.depth();
    }
    return 1 + Math.max(this.left.depth(), this.right.depth());
  }
};

bstMethods.add = bstMethods.insert;


/*
 * Complexity: What is the time complexity of the above functions?
 */

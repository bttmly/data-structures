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
    if (newBst.value < this.value) {
      if (this.left) {
        this.left.insert(newBst.value);
      } else {
        this.left = newBst;
      }
    } else {
      if (this.right) {
        this.right.insert(newBst.value);
      } else {
        this.right = newBst;
      }
    }
  },
  contains: function(value){
    if (this.value === value) { return true; }
    if (value > this.value) {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    }
  },
  depthFirstLog: function(fn){
    fn.call(null, this.value);
    if (this.left) {
      this.left.depthFirstLog(fn);
    }
    if (this.right) {
      this.right.depthFirstLog(fn);
    }
  },
  breadthFirstLog: function(fn, prev){
    if (!prev){
      var prev = [this];
      fn(this.value);
x    }
    var level = [];
    for (var i = 0; i < prev.length; i++){
      if (prev[i].left) {
        fn(prev[i].left.value);
        level.push(prev[i].left);
      }
      if (prev[i].right) {
        fn(prev[i].right.value);
        level.push(prev[i].right);
      }
    }
    if ( level.length ) {
      this.breadthFirstLog(fn, level);
    }
  },
  remove: function(value) {
    var match;
    if (value > this.value) {
      if (this.right) {
        if (this.right.value === value) {
          match = this.right;
          this.right = match.right;
          if (match.left) {
            this.right.insert(match.left.value);
          }
        } else {
          this.right.remove(value);
        }
      }
    } else {
      if (this.left) {
        if (this.left.value === value) {
          match = this.left;
          this.left = match.left;
          if (match.right) {
            this.left.insert(match.right.value);
          }
        } else {
          this.left.remove(value);
        }
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

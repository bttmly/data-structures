var makeBinarySearchTree = function(value){
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

makeBinarySearchTree.isValidBst = function(bst){
  if (bst.left) {
    if (bst.left.value < bst.value) {
      return makeBinarySearchTree.isValidBst(bst.left);
    } else {
      return false;
    }
  }
  if (bst.right) {
    if (bst.right.value > bst.value) {
      return makeBinarySearchTree.isValidBst(bst.right);
    } else {
      return false;
    }
  }
  if (!bst.left && !bst.right) {
    return true;
  }
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
  getValues: function(){
    var results = [];
    var pushVal = function(v){
      results.push(v);
    };
    this.depthFirstLog(pushVal);
    return results;
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
  },
  checkDepth : function(){
    var max = this.depth(Math.max);
    var min = this.depth(Math.min);
    if (max > min * 2) {
      // rebalance.
    }
  },
  depth : function(func) {
    if (this.left === null && this.right === null) {
      return 1;
    } else if (this.left === null) {
      return 1 + this.right.depth(func);
    } else if (this.right === null) {
      return 1 + this.left.depth(func);
    }
    return 1 + func.call(null, this.left.depth(func), this.right.depth(func));
  },
  // how do we make sure this doesn't get called recursively?
  rebalance : function() {
    var values = this.getValues();
    var median = values.sort()[Math.floor(values.length / 2)];
    var medianIndex = values.indexOf(median);
    var currentVal;
    values.splice(medianIndex, 1);
    values.push(this.value);
    this.value = median;
    this.left = null;
    this.right = null;
    while ( values.length ) {
      this.insert(values.pop());
    }
    return this;
  }
};

bstMethods.add = bstMethods.insert;


/*
 * Complexity: What is the time complexity of the above functions?
 */

var makeSelfBalancingBST = function(value){
  var bst = Object.create(selfBSTmethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

makeSelfBalancingBST.isValidBst = function(bst){
  if (bst.left) {
    if (bst.left.value < bst.value) {
      return makeSelfBalancingBST.isValidBst(bst.left);
    } else {
      return false;
    }
  }
  if (bst.right) {
    if (bst.right.value > bst.value) {
      return makeSelfBalancingBST.isValidBst(bst.right);
    } else {
      return false;
    }
  }
  if (!bst.left && !bst.right) {
    return true;
  }
};

var selfBSTmethods = {
  insert: function(value){
    var newBst = makeSelfBalancingBST(value);
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
    if (!this.isBalanced()) {
      this.rebalance();
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
  isBalanced: function(){
    var max = this.depth(Math.max);
    var min = this.depth(Math.min);
    return max <= min * 2;
  },
  depth : function(func) {
    if (this.left === null && this.right === null) {
      return 1;
    } else if (this.left === null) {
      return 1 + func.call(null, 0, this.right.depth(func));
    } else if (this.right === null) {
      return 1 + func.call(null, 0, this.left.depth(func));
    }
    return 1 + func.call(null, this.left.depth(func), this.right.depth(func));
  },
  // how do we make sure this doesn't get called recursively?
  rebalance : function() {
    var values = this.getValues();
    var median = values.sort()[Math.floor(values.length / 2)];
    var medianIndex = values.indexOf(median);
    values.splice(medianIndex, 1);

    this.value = median;
    this.left = null;
    this.right = null;
    var v;
    while ( values.length ) {
      v = values.pop();
      this.insert(v);
    }
    return this;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

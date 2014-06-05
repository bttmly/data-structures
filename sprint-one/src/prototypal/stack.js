var makeStack = function() {
  var stack = Object.create( stackMethods );
  stack._storage = {};
  stack._size = 0;
  return stack;
};

var stackMethods = {
  push: function(value){
    this._storage[this._size] = value;
    this._size++;
  },
  pop: function(){
    if ( this._size ) {
      this._size--;
      var result = this._storage[this._size];
      delete this._storage[this._size];
      return result;
    }
  },
  size: function(){
    return this._size;
  }
};


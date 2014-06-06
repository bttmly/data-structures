var makeStack = function() {
  var stack = {};
  stack._storage = {};
  stack._size = 0;
  stackMixin( stack );
  return stack;

};

// Immediately Invoked Function Expression --> IIFE
/*  Functional Shared
*/
var stackMixin = (function(){

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

  return function( obj ){
    obj.push = stackMethods.push;
    obj.pop = stackMethods.pop;
    obj.size = stackMethods.size;
    return obj;
  };

})();

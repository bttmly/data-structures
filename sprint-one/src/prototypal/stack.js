/* Prototypal */

var makeStack = function() {
  var stack = Object.create(stackMethods);
  /* ^--- this is what makes the prototypal class.
  You make an object and delegate it a prototype which is another object that it inherits its methods from.
  */
  stack._storage = {};
  stack._size = 0;
  return stack;
};

var stackMethods = {   //Stack methods is the object that gets delegated to when we call makeStack.
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

/*
In depth
-------
makeStack returns an object called "Stack" that has a prototype class called Stack Methods that has all the functions it needs.
Remember to use "this" in the prototypal object.
*/
/* Pseudoclassical */

var Stack = function() {
  //this = Object.create(Stack.prototype) <--- this statement is autoincluded as a result of using pseudoclassical style
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function() {
  if (this._size) {
    this._size--;
    var result = this._storage[this._size];
    delete this._storage[this._size];
    return result;
  }
};

Stack.prototype.size = function() {
  return this._size;
};

/* In a pseudoclassical approach we use the "prototype" that comes associated by default. We then use the prototype to associate properties that every object
will receive in the future whenever we use the new keyword. The NEW keyword is key here and without it the object can't be created and to tell the world
that this uses the new object we use the capital letter for the first character of the class ergo Stack instead of stack or makeStack. The _ variables aren't
private at all and can be easily accessed by outer objects. This is something that JS has no workaround for.*/
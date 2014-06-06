var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = Object.create(null); {}
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  var key = JSON.stringify(item);
  if ( !(key in this._storage) ) {
    this._storage[key] = true;
  }
};

setPrototype.contains = function(item){
  var key = JSON.stringify(item);
  return !!(this._storage[key]);
};

setPrototype.remove = function(item){
  var key = JSON.stringify(item);
  if ( this.contains(item) ) {
    delete this._storage[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

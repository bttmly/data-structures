var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue._storage = {};
  queue._front = 0;
  queue._back = 0;
  return queue;
};

var queueMethods = {
  enqueue: function(value){
    this._storage[this._front] = value;
    this._front++;
  },
  dequeue: function(){
    if ( this._front - this._back ) {
      var result = this._storage[this._back];
      delete this._storage[this._back];
      this._back++;
      return result;
    }
    return 0;
  },
  size: function(){
    return this._front - this._back;
  }
};




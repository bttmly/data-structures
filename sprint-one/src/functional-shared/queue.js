var makeQueue = function(){
  var queue = {};
  queueMixin(queue);
  queue._storage = {};
  queue._front = 0;
  queue._back = 0;
  return queue;
};

var queueMixin = (function(){

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

  return function(obj) {
    obj.enqueue = queueMethods.enqueue;
    obj.dequeue = queueMethods.dequeue;
    obj.size = queueMethods.size;
    return obj;
  };

})();

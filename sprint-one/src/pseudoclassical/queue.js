var Queue = function() {
  this._storage = {};
  this._front = 0;
  this._back = 0;
};

Queue.prototype.size = function(){
  return this._front - this._back;
};

Queue.prototype.dequeue = function(){
  if ( this._front - this._back ) {
    var result = this._storage[this._back];
    delete this._storage[this._back];
    this._back++;
    return result;
  }
  return 0;
};

Queue.prototype.enqueue = function(value){
  this._storage[this._front] = value;
  this._front++;
};






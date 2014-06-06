var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);
  if (!slot){
    slot = [];
  }
  slot.push( [k,v] );
  this._storage.set(i, slot);
  this._size++;
  if ( this._size > this._limit * 0.75 ) {
    this.changeSize( 2 );
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);
  if ( slot ) {
    for ( var i = 0; i < slot.length; i++ ) {
      if ( slot[i][0] === k ) {
        return slot[i][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
  this._size--;
  if ( this._size < this._limit * 0.25 ) {
    this.changeSize( 0.5 );
  }
};

HashTable.prototype.changeSize = function( multiplier ){
  this._limit = this._limit * multiplier;
  this._size = 0;
  var oldStorage = this._storage;
  this._storage = makeLimitedArray( this._limit );
  oldStorage.each( function( slot ){
    if ( slot ) {
      for ( var i = 0; i < slot.length; i++ ) {
        this.insert( slot[i][0], slot[i][1] );
      }
    }
  }.bind( this ) );
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

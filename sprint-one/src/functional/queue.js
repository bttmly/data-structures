var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[front] = value;
    front++;
  };

  someInstance.dequeue = function(){
    if ( front - back ) {
      var result = storage[back];
      delete storage[back];
      back++;
      return result;
    }
    return 0;
  };

  someInstance.size = function(){
    return front - back;
  };

  return someInstance;
};

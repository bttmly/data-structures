/* A functional implementation is really simple - it uses nested functions to act as a class and makes advantage of a close to keep it's variables alive. */

var makeStack = function(){
  var someInstance = {};
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    if ( size ) {
      size--;
      var result = storage[size];
      delete storage[size];
      return result;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};


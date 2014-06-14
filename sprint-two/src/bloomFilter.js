
var BloomFilter = (function(){

  var actualHash = function(str, max){
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash;
      hash = Math.abs(hash);
    }
    return hash % max;
  };

  // add more hash functions to reduce false positives.
  var hashes = [
    function(str, max){
      return actualHash(str, max);
    },
    function(str, max){
      return actualHash(str + str, max);
    },
    function(str, max){
      return actualHash(str + str + str, max);
    },
    function(str, max){
      return actualHash(str + str + str + str, max);
    },
  ];

  // increase size to reduce false positives
  function BloomFilter(size){
    this._size = size || 1024;
    this._storage = new Uint8Array(this._size); 
  }

  BloomFilter.prototype.add = function(value){
    var hash;
    for ( var i = 0; i < hashes.length; i++ ){
      hash = hashes[i](value, this._size);
      this._storage[hash] = 1;
    }
  };

  // false results are definitive
  // true could be from collision.
  BloomFilter.prototype.check = function(value){
    var hash;
    for ( var i = 0; i < hashes.length; i++ ){
      hash = hashes[i](value, this._size);
      if ( this._storage[hash] === 0 ) {
        return false;
      }
    }
    return true;
  };

  return BloomFilter

})();

function randomString(){
  return Math.random().toString(36).substr(-10)
}

function bloomTest(strings, runs){
  var runs = runs || 10000;
  var filter = new BloomFilter();
  var falsePositives = 0;

  strings.forEach(function(str){
    filter.add(str);
  });

  for (var i = 0; i < runs; i++){
    if ( filter.check(randomString()) ) {
      falsePositives++;
    }
  }
  return falsePositives;
}

function generateRandomStrings(num){
  var num = num || 10;
  var result = [];
  for (var i = 0; i < num; i++) {
    results.push( randomString() );
  }
  return result;
}

function bloomError(k, m, n){
  // n inserted keys
  // m array size
  // k hashes
  return Math.pow(1 - Math.pow(Math.E, (-k * n / m)), k);
}

var makeTree = function(value){
  var newTree = Object.create( treeMethods );
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree( value );
  child.parent = this;
  this.children.push( child );
};

treeMethods.contains = function( target ){
  if ( this.value === target ) return true;
  for ( var i = 0; i < this.children.length; i++ ) {
    if ( this.children[i].contains( target ) ) return true;
  }
  return false;
};

treeMethods.removeFromParent = function(){
  var index;
  if ( this.parent ){
    index = this.parent.children.indexOf( this );
    this.parent.children.splice(index, 1);
  }
};

treeMethods.traverse = function(callback){
  callback.bind(this)();
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



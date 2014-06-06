var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function( newNode, fromNode ){
  if ( this.contains( newNode ) ) {
    return false;
  }
  var node = new GraphNode( newNode );
  this.nodes.push( node );
  if ( this.nodes.length === 2 ) {
    this.nodes[0].addEdge( this.nodes[1] );
  }
  if ( fromNode ) {
    node.addEdge( this.getNode( fromNode ) );
  }
};

Graph.prototype.contains = function(node){
  for ( var i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i].value === node ) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(value){
  this.nodes.forEach(function( node, i, nodes ) {
    if ( node.value === value ) {
      nodes.splice( i, 1 );
    }
  });
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var start = this.getNode( fromNode );
  for ( var i = 0; i < start.edges.length; i++ ) {
    if ( start.edges[i].value === toNode ) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var start = this.getNode(fromNode);
  var end = this.getNode(toNode);
  start.addEdge(end);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var start = this.getNode( fromNode );
  var end = this.getNode( toNode );
  start.removeEdge( end );
  if ( !start.numEdges() ) {
    this.removeNode( start.value );
  }
  if ( !end.numEdges() ) {
    this.removeNode( end.value );
  }
};

Graph.prototype.getNode = function( nodeValue ){
  for ( var i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i].value === nodeValue ) {
      return this.nodes[i];
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


var GraphNode = (function(){

  function GraphNode( value ){
    this.value = value;
    this.edges = [];
  }

  GraphNode.prototype.addEdge = function( node ){
    this.edges.push( node );
    node.edges.push( this );
  };


  GraphNode.prototype.hasEdge = function( node ){
    if ( this.edges.indexOf( node.value ) === - 1 ){
      return false;
    }
    return true;
  };

  GraphNode.prototype.removeEdge = function( other ){
    var i1 = this.edges.indexOf( other );
    if ( i1 !== -1 ) { this.edges.splice(i1, 1); }
    var i2 = other.edges.indexOf( this );
    if ( i2 !== -1 ) { this.edges.splice(i2, 1); }
  };

  GraphNode.prototype.numEdges = function(){ return this.edges.length; };

  return GraphNode;
})();

var Graph = function(){
  this.graphNodes = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = makeNode(newNode);
  this.graphNodes.push( node );
  if ( toNode ) {
    toNode = this.getNode(toNode);
    toNode.neighbors.push( node );
    node.neighbors.push( toNode );
  }
  if ( this.graphNodes.length === 2 ) {
    this.graphNodes[0].neighbors.push( this.graphNodes[1] );
    this.graphNodes[1].neighbors.push( this.graphNodes[0] );
  }
  if ( this.graphNodes.length > 1 ) {
    this.removeEmpty();
  }
};

Graph.prototype.removeEmpty = function(){
  for (var i = 0; i < this.graphNodes.length; i++ ) {
    if ( !this.graphNodes[i].neighbors.length ) {
      this.graphNodes.splice(i, 1);
      i--;
    }
  }
};

Graph.prototype.contains = function(node){
  for (var i = 0; i < this.graphNodes.length; i++){
    if ( this.graphNodes[i].value === node ) {
      return true;
    }
  }
  return false;
};

Graph.prototype.getNode = function(value){
  var node;
  for (var i = 0; i < this.graphNodes.length; i++) {
    node = this.graphNodes[i];
    if ( node.value === value ) {
      return node;
    }
  }
};

Graph.prototype.removeNode = function(node){
  var currentNode;
  var neighbor;
  var index;
  for (var i = 0; i < this.graphNodes.length; i++){
    if ( this.graphNodes[i].value === node ){
      currentNode = this.graphNodes[i];
      for ( var j = 0; j < currentNode.neighbors.length; j++ ) {
        neighbor = currentNode.neighbors[j];
        index = neighbor.neighbors.indexOf( currentNode );
        neighbor.splice(index, 1);
      }
      this.graphNodes.splice(i, 1);
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var start = this.getNode(fromNode);
  var end = this.getNode(toNode);
  return start.neighbors.indexOf( end ) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this.getEdge(fromNode, toNode)) {
    var start = this.getNode(fromNode);
    var end = this.getNode(toNode);
    start.neighbors.push(end);
    end.neighbors.push(start);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.getEdge(fromNode, toNode)) {
    var start = this.getNode(fromNode);
    var end = this.getNode(toNode);
    var si = start.neighbors.indexOf(end);
    var ei = end.neighbors.indexOf(start);
    end.neighbors.splice(ei, 1);
    start.neighbors.splice(si, 1);
    this.removeEmpty();
  }
};

var makeNode = function(value){
  return { value: value, neighbors: [] };
};

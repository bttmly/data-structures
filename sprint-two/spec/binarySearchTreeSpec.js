describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should remove values at the correct location in the tree', function(){
    bst = makeBinarySearchTree(10);
    bst.insert(5);
    bst.insert(2);
    bst.insert(7);
    bst.insert(15);
    bst.insert(13);
    bst.insert(17);
    expect(bst.right.value).to.equal(15);
    expect(bst.right.right.value).to.equal(17);
    expect(bst.right.left.value).to.equal(13);
  });

  it('should return the depth of the tree', function(){
    bst = makeBinarySearchTree(10);
    bst.insert(5);
    bst.insert(4);
    bst.insert(2);
    bst.insert(1);
    bst.insert(15);
    bst.insert(13);
    bst.insert(17);
    console.log(bst);
    expect(bst.depth(Math.max)).to.equal(5);
  });
});

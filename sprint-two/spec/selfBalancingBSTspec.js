describe('selfBalancingBST', function() {
  var bst;

  it('should return the depth of the tree', function(){
    bst = makeSelfBalancingBST(40);
    bst.insert(20);
    bst.insert(10);
    expect(bst.depth(Math.max)).to.equal(2);
    expect(bst.depth(Math.min)).to.equal(2);
  });

  it('should get values', function(){
    bst = makeSelfBalancingBST(2);
    bst.insert(1);
    bst.insert(3);
    expect(bst.getValues()).to.deep.equal([2,1,3])
  });

  it('should rebalance to a valid tree', function(){
    bst = makeSelfBalancingBST(10);
    bst.insert(20);
    bst.insert(30);
    expect(bst.value).to.equal(20);
    expect(makeSelfBalancingBST.isValidBst(bst)).to.equal(true);

  });

});

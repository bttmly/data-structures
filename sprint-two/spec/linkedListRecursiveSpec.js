describe('linkedList', function() {
  var linkedList;

  // beforeEach(function() {
  //   linkedList = makeRecursiveLL();
  // });

  it('should have a next and a value', function() {
    var linkedList = makeRecursiveLL(1);
    expect(linkedList).to.have.property("next");
    expect(linkedList).to.have.property("value");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    var linkedList = makeRecursiveLL(1);
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    var linkedList = makeRecursiveLL(4);
    expect(linkedList.tail().value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail().value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    var linkedList = makeRecursiveLL(4);
    linkedList.addToTail(5);
    expect(linkedList.head().value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head().value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    var linkedList = makeRecursiveLL(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    var linkedList = makeRecursiveLL(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    var linkedList = makeRecursiveLL(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
});

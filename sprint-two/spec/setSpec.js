describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    set.add("'Hello'");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains("'Hello'")).to.equal(true);

  });

  it('should add numbers to a set', function(){
    set.add(1234567890);
    expect(set.contains(1234567890)).to.equal(true);
  });

  it('should add objects to a set', function(){
    var obj = { name: "whatever", value: "something" };
    set.add(obj);
    expect(set.contains(obj)).to.equal(true);
  });

  it('should check if it contains a value', function(){
    set.add("blah");
    expect(set.contains("blah")).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

});

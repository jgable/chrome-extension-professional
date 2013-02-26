
var should = require("should");

var KlassOne = require("../scripts/moduleA/one");

describe("KlassOne", function() {

	it("exists", function() {
		should.exist(KlassOne, "exists");
		should.exist(new KlassOne(), "Instantiates")
	});

	it("does something", function() {
		var myOne = new KlassOne();

		var result = myOne.doSomething();

		result.should.equal("something");
	});	

});
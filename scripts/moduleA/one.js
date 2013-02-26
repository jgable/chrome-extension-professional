
(function() {

	var init = function($, _) {
		var KlassOne = function() {

		};

		KlassOne.prototype = {
			doSomething: function() {
				console.log("Doing something from KlassOne");
				return "something";
			}
		};

		return KlassOne;
	};

  
	if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
		// AMD Style... for require js.
		define(["jquery", "lodash"], init);
	} else if (typeof exports == 'object' && exports) {
		// Node style... for testing.
		var jquery = require("jquery"),
			lodash = require("lodash");

		module.exports = init(jquery, lodash);
	}

}());
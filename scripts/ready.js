
define(['moduleA/one'], function(KlassOne) {
	return {
		init: function() {
			chrome.extension.sendMessage({}, function(response) {
				var readyStateCheckInterval = setInterval(function() {
					if (document.readyState === "complete") {
						clearInterval(readyStateCheckInterval);

						// This part of the script triggers when page is done loading
						console.log("Hello. This message was sent from scripts/ready.js");

						var myOne = new KlassOne();

						myOne.doSomething();
					}
				}, 10);
			});
		}
	};
});
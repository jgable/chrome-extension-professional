
(function() {
	var requirejsConfig = {
		paths: {
			jquery: "lib/jquery",
			lodash: "lib/lodash",
			backbone: "lib/backbone",
			store: "lib/store"
		},
		shim: {
			jquery: {
				exports: "$"
			},
			lodash: {
				exports: "_"
			},
			backbone: {
				deps: ["jquery", "lodash"],
				exports: "Backbone"
			},
			store: {
				exports: "Store"
			}
		}
	};

	require.config(requirejsConfig);

	require(['ready', 'backbone'], function(ready) {
		console.log("required ready");
		ready.init();
	});
}());
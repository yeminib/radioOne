/* Filename: route.js
 */

define(['marionette'], function (Maironette) {
	return Marionette.AppRouter.extend({

	    routes : {
	      "helloWorld": "hello",
	      "yo": "yo",
	      "Testing": "test1"
	    },
	    
			hello : function () {
				console.log("loading HELLO...");
				require(['views/Hello'], function(vHello){
					var hello = new vHello();
					window.app.main.show(hello);
				});
			},
			
			test1 : function () {
				console.log("loading test...");
				require(['views/Test'], function(vTest){
					var testing = new vTest();
					window.app.main.show(testing);
				});
			},

			yo : function () {
				console.log("Yo!!")
			}

	    // showCutOperations : function () {
	    // 	console.log("Show CUT operations");
	    // 	require(['views/View.MTLXCUTLayout'], function(vMTLXCUTLayout){
	    // 		var mtlxcut = new vMTLXCUTLayout();
	    // 		window.app.main.show(mtlxcut);
	    // 	});
	    // },
	    //
	    // showSMM2Operations : function () {
	    // 	console.log("Show SMM2 operations");
	    // }
	});
});

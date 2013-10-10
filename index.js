var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// Create an object ("hash") to hold all of the request handlers
var handle 						= {};
handle['/'] 					= requestHandlers.home;
handle['/home'] 			= requestHandlers.home;
handle['/form']				= requestHandlers.form;
handle['/postHandle']	= requestHandlers.postHandle;

// Start the HTTP server with the specified routing function
// Pass the handle to request handlers to allow router reusability
server.start(router.route, handle);
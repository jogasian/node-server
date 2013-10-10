//
// Function to route requests to their appropriate handler functions. This 
// function should be called by the server application that accepts requests.
// Params:
//		response	- (Object): HTTP server object used to send responses
//    handle 		- (Object): object containing path => handler route mappings
//		postData	- (String?): all POST data associated with the HTTP request
//		pathname 	- (String): the requested path to map to a request handler
//
function route(response, handle, postData, pathname) {
	console.log("Routing request for "+pathname);

	// Check for valid handler in the handle object and call
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, postData);
	}
	else {
		console.log("No request handler found for "+pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not Found");
		response.end();
	}
}

exports.route = route;
var http 	= require("http");
var url		= require("url");


//
// Function to start the HTTP server
// Params:
//    route  - (Function): router function to route requests to handlers
//    handle - (Object): object containing path => handler mappings for routing
//    [port] - (Number): optional port number for HTTP server to listen on
//
function start(route, handle, port) {
  port = typeof port !== 'undefined' ? port : 8080;	    // Default port

  //
  // Callback to execute upon request receipt
  //
  function onRequest(request, response) {
  	var pathname = url.parse(request.url).pathname;		  // Request path
    console.log("Request for "+pathname+" received.");  // Log all connections

    // Common HTTP server functionality
    request.setEncoding("utf8");
    var postData = "";
    request.addListener("data", function(postDataChunk) { // Handle POSTs
      postData += postDataChunk;
      console.log("Received POST data chunk '"+postDataChunk+"'");
    });
    request.addListener("end", function() {
      route(response, handle, postData, pathname);      // Route the request
    });
  }


  // Start the HTTP server application
  http.createServer(onRequest).listen(port);
  console.log("HTTP server listening on port "+port);
}

// Make is a Node Module that exports the "start" function
exports.start = start;
var querystring = require("querystring");

//
// REQUEST HANDLER
// Function home does something
// Params:
//		response - (Object): HTTP server object used to send responses
//		postData - (String?): all POST data associated with the HTTP request
//
function home(response, postData) {
	console.log("Request handler 'home' was called.");

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Why, hello there!");
	response.end();
}


//
// REQUEST HANDLER
// Function to show a simple HTML form to the user
// Params:
//		response - (Object): HTTP server object used to send responses
//		postData - (String?): all POST data associated with the HTTP request
//
function form(response, postData) {
	console.log("Request handler 'form' was called.");

	var body = '<html>'+
 		'<head>'+
 		'<meta http-equiv="Content-Type" content="text/html; '+
 		'charset=UTF-8" />'+
 		'</head>'+
 		'<body>'+
		'<form action="/postHandle" method="post">'+
		'<input name="text" />'+
		'<input type="submit" value="Submit text" />'+
		'</form>'+
		'</body>'+
		'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}


//
// REQUEST HANDLER
// Function to handle POST requests with '/form' data
// Params:
//		response - (Object): HTTP server object used to send responses
//		postData - (String?): all POST data associated with the HTTP request
//
function postHandle(response, postData) {
	console.log("Request handler 'postHandle' was called.");

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("text = '"+querystring.parse(postData).text+"'");
	response.end();

}


exports.home				= home;
exports.form				= form;
exports.postHandle	= postHandle
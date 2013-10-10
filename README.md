This Node application implements a rudimentary HTTP server. This server has the 
ability to route requests for arbitrarily defined paths to specific functions 
that handle the requests.

This was developed along with the tutorials in the terrific book "The Node 
Beginner Book" by Manuel Kiessling
http://www.nodebeginner.org/

Buy his book!

--------------------------------------------------------------------------------
This server application has a main file, index.js which includes starts our HTTP
server (server.js) and defines mappings from URL paths to requestHandler 
functions.

The server includes a routing function (router.js) and calls the appropriate 
requestHandler function (requestHandlers.js) for the requested URL path string.

The /form path allows the user to enter data into an HTML form which is then 
POSTed to /postHandle and displayed back to the user.

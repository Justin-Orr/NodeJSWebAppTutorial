/* Section 2.2 Express Web Server */

const express = require('express'); // This returns a function
const app = express(); // The function returns an express object

// We now have access to useful functions such as: app.get() app.post() app.put() app.delete()

// This get function takes the endpoint url and a function that needs a request and response object as parameters.
// Specifically it takes the url and a callback function called the Rout Handler
app.get('/', function (req, res) {
  res.send('Hello World!!!');
});

app.get('/api/courses', (req,res) => {
  res.send([1,2,3]);
});

/* 2.4 Route Parameters */

// In the url we use a colon to specifiy parameters that we can grab and use in the code.
// Run the file and type http://localhost:3000/api/courses/1
app.get('/api/courses/:id', (req,res) => {
  res.send(req.params.id);
});

// We can see the params object and see all of the parameters it can see.
// Run the file and type http://localhost:3000/api/posts/2022/01
/*
app.get('/api/posts/:year/:month', (req,res) => {
  res.send(req.params);
});
*/

// Similarly we can grab the query parameters. Check notes 2.4 for this
// Run the file and type http://localhost:3000/api/posts/2022/01?sortBy=name
app.get('/api/posts/:year/:month', (req,res) => {
  res.send(req.query);
});

// Now that we have defined an endpoint we need to listen for this interaction on a port
// Remember the callback function syntax for nameleass functions, you specify the parameters and use an => symbol to the body of the function.
// The Parameters to the listen function is the port number and an function to call when the server starts listening to the port. 

// 2.3 Changes: Changing port 3000 to an environment variable.

// Process is a global opbject and we will set the port constant to it if one is assigned by the host environment. If none is set then default to 3000.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 





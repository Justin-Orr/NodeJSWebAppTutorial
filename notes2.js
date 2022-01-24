/* 2. Building RESTFUL API's Using Express */

// We dont want to use Nodes Default Modules for our end points when building our REST API.
// Instead we will use the Express framework to make building our http web server and the REST API faster

/* 2.1 RESTFUL services */

// REST Api's are built upon using a a Client/Server architecture and the client (what the user uses) and the server (which processes the requests from the client) are connected using an HTTP protocol

// REST stands for Representational State Transfer
// REST uses CRUD operations: Create, Read, Update, and Delete

// HTTP vs HTTPS: The latter is used for secure data transfer
// HTTP uses different types of methods to interact with the endpoints
// There are types of requests. GET: Grabbing data, POST: create data, PUT: update data, DELETE: deletes data
// There are typical naming conventions for your endpoint which gives some information about the type of request

// For example: /api/customers should give a list of customers. /api/customers/1 should give a custoemr with the id of 1
// For updating customer information we should use the same url as before so /api/customers/1 but in the body of the request have JSON with the new customer data.
// For delelting a customer just send a delete request to /api/customers/1
// For creating a customer write a post request to /api/customers and notice how we do not specify an id and in the body of the request we need to the new customer data

/* 2.2 Introducing Express */

//The code is in index.js

/* 2.3 Nodemon */

// When we want to update our changes to our endpoints we have to cancel the currently running node app. We can simplify this process on constant starting and stopping using Nodemon module

// Like SASS, nodemon will watch the files within the directory an when there are any changes detected, then nodemon will restart the current running process

// To run run the app like you would normally but use nodemon instal node as your first keyword for example nodemon index.js

/* 2.4 Environment Variables */

// Originally we used port 3000 arbittrarily. However when we ddeploy our server to the hosting environment the port will be allocated dynamically and we need t oaccomodate for this change.

// We will use an environment variable. Look in index.js

// Environment variables are variables that are apart of the process running. We would set this variable outside of the running appilcation and host environments would dynamically allocate.

// To Manually set this, in command line run (MAC) export PORT=value, (Windows) set PORT=value For windows use cmd and not powershell to work.

/* 2.4 Route Parameters */

// Getting a specific course for an endpoint example
// We can add query parameters as well. Lets take a look at http://localhost:3000/api/posts/2022/01?sortBy=name
// posts is a resource, 2022 is a year, 01 is a month and these two are called routing parameters but the ?sortBy=name is called a query parameter.
// Query string parameters are optional and are defined by the ? symbol
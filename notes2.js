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

// setup (like default tags in HTML)
const express = require("express")
// tell app variable to be express server
const app = express()
const router = express.Router()

// start web server.. app.listen(portNum, function)
app.listen(3000, function() {
    console.log("Listening on port 3000")
})

// make API using routes
// Routes - used to handle browser requests. look like URLs. difference - when a browser requests route, it is dynamically handled by function.

// GET or regular request when someone goes to http://localhost:3000/hello.. when using a funct in a route, we almost always have a parameter or handle a response request
app.get("/hello", function(req, res) {
    res.send("<h1>Hello Express</h1>")
})

app.get("/goodbye", function(req, res) {
    res.send("<h1>Goodbye, Express!</h1>")
})
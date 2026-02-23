// setup (like default tags in HTML)
const express = require("express")
// HAVE to use cors to host front and back end on same device
var cors = require("cors")
// tell app variable to be express server
const app = express()
app.use(cors())
app.use(express.json());

let courses = [
    { id: 1, name: "Web Development", instructor: "Smith" },
    { id: 2, name: "Database Systems", instructor: "Johnson" }
];


// make API using routes
// Routes - used to handle browser requests. look like URLs. difference - when a browser requests route, it is dynamically handled by function.

app.get("/api/courses", (req, res) => {
    res.json(courses);
});

app.post("/api/courses", (req, res) => {
    const newCourse = {
        id: Date.now(),
        name: req.body.name,
        instructor: req.body.instructor
    };

    courses.push(newCourse);
    res.status(201).json(newCourse);
});

app.put("/api/courses/:id", (rex, res) => {
    const course = courses.find(c => c.id == req.params.id);

    if (!course) {
        return res.status(404).json({ message: "Course not found" })
    }

    course.name = req.body.name;
    course.instructor = req.body.instructor;

    res.json(course);
});

app.delete("/api/courses/:id", (req, res) => {
    courses = courses.filter(c => c.id != req.params.id);
    res.json({ message: "Course deleted" });
});

app.listen(3000)
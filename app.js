// setup (like default tags in HTML)
const express = require("express")
// HAVE to use cors to host front and back end on same device
var cors = require("cors")
// tell app variable to be express server
const app = express()
app.use(cors())
const router = express.Router()


// make API using routes
// Routes - used to handle browser requests. look like URLs. difference - when a browser requests route, it is dynamically handled by function.

router.get("/songs", function(req, res) {
    const songs = [
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["electro house"]
        },
        {
            title: "Uptown Funk",
            artist: "Bruno Mars",
            popularity: 10,
            genre: ["funk", "boogie"]
        }
    ]

    res.json(songs)
})

// put /api before endpoint
app.use("/api", router)
app.listen(3000)
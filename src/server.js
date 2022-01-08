const express = require("express");
const cors = require("cors");

const app = express();

// CORS helps us make requests in one website to another
// Helps fix the buggy interaction between Express and React for me
app.use(cors());

// This chooses the port (on local host) we will use to host the server
const port = process.env.PORT || 5000;
/*NOTE: In the package.json of this react project,
	"script" : "http://localhost:5000"
	needed to be added after the "name" attribute, this ensures that fetch requests
	in react will be routed towards this express port and not the port that react runs on
*/

// This is our first endpoint, that will send data as a JSON
app.get("/api/my_sick_url", (req, res) => {
	console.log("sending text");
	res.json({ express: "This is some text" });
});

// Console log to confirm that Express is listnenig/observing for request on our port
app.listen(port, () => console.log(`Listening on port ${port}`));

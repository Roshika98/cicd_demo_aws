const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
	res.send("<h3>CiCd demo</h3>");
});

app.listen(port, () => {
	console.log("app started");
});

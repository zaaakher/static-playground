const express = require("express"); //import express
const path = require("path");
const app = express(); //start a express server
const port = 3000; //localhost port

// app.get("/", (req, res) => {
// 	return res.send("hello world");
// });

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log("Expess is listening to port " + port));

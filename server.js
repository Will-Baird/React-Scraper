const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const routes = require("./routes/api.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NYTReact";

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
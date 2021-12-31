const express = require("express");
const BodyPareser = require("body-parser");
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");





let app = express();
app.use(
  BodyPareser.urlencoded({
    extended: true,
  })
);

app.use(BodyPareser.json());


// Require Notes routes
require('./app/routes/note.routes.js')(app);
app.listen(3000, function () {
  console.log("server is running : 3000");
});





app.get("/", function (req, res) {
  res.json({
    Vishal: "wellcome to Curd opration",
  });
});



// database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
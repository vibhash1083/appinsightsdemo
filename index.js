const express = require("express");
const app = express();
const port = 3000;
let appInsights = require("applicationinsights");

appInsights.setup("<connection_string>")
    .enableWebInstrumentation(true)
    .start();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
const express = require("express");
const app = express();
const port = 3000;
let appInsights = require("applicationinsights");

appInsights.setup("<connection_string>")
    .enableWebInstrumentation(true)
    .start();

app.get("/", (req, res) => {
    let client = appInsights.defaultClient;
    client.trackEvent({ name: "my custom event", properties: { customProperty: "finally it worked" } });
    client.trackException({ exception: new Error("handled exceptions can be logged with this method") });
    client.trackMetric({ name: "custom metric", value: 3 });
    client.trackTrace({ message: "trace message" });
    console.log("Hello World!");
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
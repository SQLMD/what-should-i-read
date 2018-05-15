const express = require("express");

const app = express();
app.use(express.static(`${__dirname}/public`));
app.set("view engine", "ejs");

const apiRouter = require("./resources/router");

app.use("/", apiRouter);

app.listen(process.env.PORT || 3000, () => console.log("Server is running"));

module.exports = app;

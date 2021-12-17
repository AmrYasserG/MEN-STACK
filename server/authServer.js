require("dotenv").config({ path: __dirname + "/./../.env" });
const express = require("express");
const app = express();
const Port = process.env.AuthPort || 3006;

app.listen(Port, () => {
  console.log(`Authentication Server running on port ${Port}`);
});

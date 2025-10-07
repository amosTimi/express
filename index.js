/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Azure Express App!");
});

const port = process.env.PORT || 3000;  // 👈 important!
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


module.exports = require('./lib/express');



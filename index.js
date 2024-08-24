require('dotenv').config();
require('./src/db/connect');
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./src/routes/route');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.port;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use('/', route);

// For static website
app.use(express.static(path.resolve(__dirname, "blogging-site-frontend/dist")));
app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "blogging-site-frontend/dist/index.html"));
});


app.listen(port || 3000, function () {
  console.log(`Express app running on port http://localhost:${port}/`);
});

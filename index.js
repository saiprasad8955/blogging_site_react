const express = require('express');
const bodyParser = require('body-parser');
const route = require('./src/routes/route');
const app = express();
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const connectDB = require('./src/db/connect');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use('/', route);

// For static website
app.use(express.static(path.resolve(__dirname, "blogging-site-frontend/dist")));
app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "blogging-site-frontend/dist/index.html"));
});


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // console.log(process.env.MONGO_URI)
    await connectDB(process.env.MONGO_URI);
    app.listen(port || 3000, function () {
      console.log(`Express app running on port http://localhost:${port}/`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

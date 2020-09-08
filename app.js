"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const path = require("path");
const OS = require("os");

const app = express();

// Threadpool config
require("dotenv").config();
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;

// Middleware
// Server
const server = http.createServer(app);
const port = process.env.PORT;

server.listen(port, () => {
  console.log("NodeJS server listening on: ", port);
});

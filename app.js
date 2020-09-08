"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const path = require("path");
const OS = require("os");

const feedRoutes = require("./routes/feed");

const app = express();

// Threadpool config
require("dotenv").config();
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;

// Middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
  // allows specific domains - replace *
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access.Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

// Server
const server = http.createServer(app);
const port = process.env.PORT;

server.listen(port, () => {
  console.log("NodeJS server listening on: ", port);
});

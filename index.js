const jsonServer = require("json-server");
const path = require("path");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

// Serve static files (images)
server.use("/images", express.static(path.join(__dirname, "images")));

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

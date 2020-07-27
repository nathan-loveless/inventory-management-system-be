const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const authRouter = require("../auth/auth-router.js");
const userRouter = require("../users/users-router.js");
const invRouter = require("../inventory/inventory-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
server.use("/api/inventory", invRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;

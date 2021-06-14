const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// ###[  Routers ]###
const indexRouter = require("./index/indexRouter");
const CustomerRouter = require("./customers/customers.route");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

// application routes
app.use("/", indexRouter);
app.use("/customers", CustomerRouter);

module.exports = app;
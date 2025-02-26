const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const UserRoutes = require("./routes/user.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

app.use("/user", UserRoutes);


module.exports = app;

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//route imports
const blogRoute = require("./routes/blog");
const authRoute = require("./routes/auth");

//app

const app = express();

//connecting db

mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  });

//middlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV == "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes middlewares
app.use("/api", blogRoute);
app.use("/api", authRoute);

//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listing at ${port}`);
});

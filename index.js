const express = require("express");
const path = require("path");
const app = express();
const rootRouter = require("./routes/csvRoute");
const expressLayouts = require("express-ejs-layouts");
const connectDb = require("./config/db");
const dotenv = require("dotenv");

// to fetch values from my dotenv file
dotenv.config();
connectDb();

//use the port automatially from environment variable otherwise port 3000
const port = process.env.PORT || 3000;

app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", rootRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

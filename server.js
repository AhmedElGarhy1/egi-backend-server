require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connect } = require("mongoose");

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//* internal files
//? routes
const subscribeRoutes = require("./routes/subscribe");
const messageRoutes = require("./routes/message");

// middleware
// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(express.static("public"));

// app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.use("/api/subscribe", subscribeRoutes);
app.use("/api/message", messageRoutes);

const port = process.env.PORT || 8000;
connect(process.env.MONGO_API, () => {
  app.listen(port, () => {
    console.log(`listening at port ${port}`);
  });
});

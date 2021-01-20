const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/user.route");

const app = express(); //binding app to express middleware
app.use(express.json());

/**parse requests of content-type - application/json */
app.use(bodyParser.json());

/**  parse requests of content-type - application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(cors());
app.use('/api/axios',userRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Node Boilerplate For Quick Starter Projects." });
  });

if (
  process.env.NODE_ENV == "development" ||
  process.env.NODE_ENV == undefined
) {
  require("dotenv").config({ path: "config/dev.env" });
} else if (process.env.NODE_ENV == "staging") {
  require("dotenv").config({ path: "config/staging.env" });
} else if (process.env.NODE_ENV == "production") {
  require("dotenv").config({ path: "config/prod.env" });
}

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running on port " + process.env.PORT);
});

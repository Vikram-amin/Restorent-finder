require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(morgan("tiny"));


//  custum midddleware
app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.get("/api/v1/getRestorents", (req, res) => {
  console.log("hi");
  res.status(404).json({
    status: "success",
    restaurant: "KFC",
  });
});

app.get("/api/v1/getRestorents/:id", (req, res) => {
  console.log(res.params);
});



app.listen(PORT, () => {
  console.log(` server listening at port ${PORT}`);
});

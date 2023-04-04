const express = require("express");
const Bollywood = require("./Route/ApiData/BollywoodData");
const cors = require("cors");
const app = express();

const route = require("./Route/Route");
// const Bollywood = require("./Route/ApiData/BollywoodData");
app.use(
  cors({
    origin: "*",
  })
);

app.use(route);

app.get("/Bollywood", (req, res) => {
  res.json(Bollywood);
});

app.listen(8000, () => {
  console.log("server is running");
});

// const express = require("express");
// const app = express();
// app.listen(7070, () => {
//   console.log("server is running......");
// });

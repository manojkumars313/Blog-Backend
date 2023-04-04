const route = require("express").Router();
const Bollywood = require("../Route/ApiData/BollywoodData");
// const Hollywood = require("../router/Hollywood");
// const Food = require("../router/Food");
// const Home = require("../router/Home");
// const Technology = require("../router/Technology");
// const Fitness = require("../router/Fitness");
route.get("/Bollywood", Bollywood);
// route.get("/Hollywood", Hollywood);
// route.get("/Food", Food);
// route.get("/", Home);
// route.get("/Technology", Technology);
// route.get("/Fitness", Fitness);
// route.get('/',Bollywood)

module.exports = route;

const routes = require("express").Router();
const user = require("./Routes/UserRoute");

routes.use("/user", user);

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

module.exports = routes;

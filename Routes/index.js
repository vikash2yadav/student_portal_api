module.exports = (app) => {
  app.post("/", (req, res) => {
    res.send("Welcome To Student Portal");
  });
  
  // student route
  app.use("/student", require("./students"));

  // Subject route
  app.use("/subject", require("./subjects"));
};

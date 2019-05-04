var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/categories", function(req, res) {
    console.log("we hit the route");
    var TestItem = {
      price: 120,
      name: "alexa mini",
      category: "cameras",
      description: "just a test",
      available: false
    };

    db.Category.findAll({
      where: { category: "cameras" }
    }).then(function(data) {
      res.json(data);
    });

    res.send("we sent back")
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};

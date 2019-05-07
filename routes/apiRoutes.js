var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/categories/:category", function(req, res) {
    console.log("we hit the route", req.params);
    // // var TestItem = {
    //   price: 400,
    //   name: "nikon camera",
    //   category: "cameras",
    //   description: "this is a nice camera",
    //   available: true
    // };

    db.category
      .findAll({
        where: { category: req.params.category }
      })
      .then(function(data) {
        res.json(data);
      });

    // db.category.create(TestItem).then(function(data){
    //   console.log(data)
    // })

    // res.send("we sent back")
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.json(dbExamples);
    // });
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

var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/categories/:category", function(req, res) {
    console.log("we hit the route", req.params);
    var TestItem = {
      price: 1200,
      name: "cannon boss 3x",
      category: "lenses",
      description: "ultimate in durable lenses",
      available: true
    };

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

  app.get("/api/cart/:cartItem", function(req, res) {
    console.log("there's a route here, dude", req.params);
    res.send("Is this working at all, " + req.params);
  });

  // Create a new example
  app.post("/api/posting", function(req, res) {
    console.log("hit the posting route");
    db.category.create(req.body).then(function(data) {
      console.log(data);
      res.json(data);
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

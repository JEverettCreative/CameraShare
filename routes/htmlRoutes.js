var db = require("../models");
var path = require("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
    res.sendFile(path.join(__dirname + "/../views/layouts/lease.html"));
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Route for rendering the posting.html page
  app.get("/posting", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/layouts/posting.html"));
  });

  // Route for rendering the cart from the lease button
  app.get("/cart/:cartItem", function(req, res) {
    db.category
      .findOne({ where: { id: req.params.cartItem } })
      .then(function(cartItem) {
        res.sendFile(path.join(__dirname + "/../views/layouts/cart.html"), {
          cartItem: cartItem
        });
        // var testDiv = $("<div class='jumbotron'>");
        // var testHeader = $("<h1>").append(cartItem);
        // testDiv.append(testHeader);
        // $("#cart-container").append(testDiv);
      });
  });
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};

var db = require("../models");
var passport = require("passport");


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

  });

  app.get("/api/cart/:cartItem", function(req, res) {
    console.log("there's a route here, dude", req.params);
    // Use params to find item in database, then send it back as json data
    db.category
    .findOne({ where: { id: req.params.cartItem } })
    .then(function(data) {
        console.log(data);
        res.json(data);
      });
      // var testDiv = $("<div class='jumbotron'>");
      // var testHeader = $("<h1>").append(cartItem);
      // testDiv.append(testHeader);
      // $("#cart-container").append(testDiv);
    });
    

  // Create a new listing
  app.post("/api/posting", function(req, res) {
    console.log("hit the posting route");
    db.category.create(req.body).then(function(data) {
      console.log(data);
      res.json(data);
    });
  });

  
  // GET /auth/google
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  The first step in Google authentication will involve
  //   redirecting the user to google.com.  After authorization, Google
  //   will redirect the user back to this application at /auth/google/callback
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["https://www.googleapis.com/auth/userinfo.profile"]
    })
  );

  // GET /auth/google/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    function(req, res) {
      req.session.token = req.user.token;
      res.redirect("/");
    }
  );

};


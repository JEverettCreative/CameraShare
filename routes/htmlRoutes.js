var db = require("../models");
var path = require("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/layouts/index.html"));
  });

  app.get("/login", (req, res) => {
    if (req.session.token) {
      res.cookie('token', req.session.token);
      console.log("cookie has been set!!!");      
      res.json({
          status: 'session cookie set'
      });
  } 
  else {
      res.cookie('token', '')
      res.json({
          status: 'session cookie not set'
      });
    }
  });

  app.get("/logout", (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

  // Load leasing page
  app.get("/lease", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/layouts/lease.html"));
  });

  // Route for rendering the posting.html page
  app.get("/posting", function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/layouts/posting.html"));
  });

  // Route for rendering the cart from the lease button
  app.get("/cart/:cartItem", function(req, res) {
    
        res.sendFile(path.join(__dirname + "/../views/layouts/cart.html"));
        // var testDiv = $("<div class='jumbotron'>");
        // var testHeader = $("<h1>").append(cartItem);
        // testDiv.append(testHeader);
        // $("#cart-container").append(testDiv);
      
  });
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};

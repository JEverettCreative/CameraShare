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

  // GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  res.redirect('/');
});
};


var db = require("../models");
var path = require("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.session.token) {
      res.cookie('token', req.session.token);
      res.json({
          status: 'session cookie set'
      });
  } 
  // else {
  //     res.cookie('token', '')
  //     res.json({
  //         status: 'session cookie not set'
  //     });
  //   }
    res.sendFile(path.join(__dirname + "/../views/layouts/index.html"));
  });

  app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

  // Load leasing page
  app.get("/lease", function(req, res) {
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

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};

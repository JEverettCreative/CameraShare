require("dotenv").config();
var express = require("express");
var session = require("express-session")
// var exphbs = require("express-handlebars");
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var cookieParser = require("cookie-parser");
var cookieSession = require("cookie-session");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY]
}));
app.use(cookieParser());

// Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}




// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a profile object.

passport.serializeUser(function(profile, done) {
  console.log('Serialize profile called.');
  return done(null, profile);
});

passport.deserializeUser(function(id, done) {
  console.log('Deserialize profile called.');
  return done(null, profile);
  });

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, err) {
      console.log('USER ===>', profile);
      if (profile) {
        profile = profile;
        console.log("it worked!");
        return profile
      } else {
        throw err
      }
    }
  )
);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
require("dotenv").config();
var express = require("express");
// var exphbs = require("express-handlebars");
var passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var cookieParser = require("cookie-parser");
var cookieSession = require("cookie-session");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(cookieParser());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a profile object.

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL
    },
    function(token, tokenSecret, profile, done) {
      console.log("USER ===>", profile);
      if (profile) {
        profile = profile;
        console.log("it worked!");
        return done(null, {
          profile: profile,
          token: token
        });
      } else {
        done(new Error());
      }
    }
  )
);

passport.serializeUser(function(profile, done) {
  console.log("Serialize profile called.");
  return done(null, profile);
});

passport.deserializeUser(function(id, done) {
  console.log("Deserialize profile called.");
  Profile.findByID(id, function (err, profile) {
    done(err, profile);
  });
  return done(null, profile);
});

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

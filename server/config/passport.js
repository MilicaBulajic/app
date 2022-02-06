const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require("./../db/models/");
// Telling passport we want to use a Local Strategy. In other words, we
// want login with a username/email and password



passport.use(new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
  function (email, password, done) {
      db.User.findOne({ where: { email: email } })
           .then(function (users) {
               if (!users) {
                   return done(null, false, { message: 'Incorrect email.' });
               }
               if (!users.password === password) {
                   return done(null, false, { message: 'Incorrect password.' });
               }
               return done(null, users);
           })
           .catch(err => done(err));
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;

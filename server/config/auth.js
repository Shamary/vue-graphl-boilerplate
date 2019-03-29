//passport
import passport from 'passport'
import models from '../src/models'

var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy( {usernameField: 'username', passwordField: 'username'},
  function(username, password, done) {
    models.user.findOne({ attributes: ['id','name'], 
        where : {name: username} }).then( function (user) {
      //if (err) { return done(err); }
      if (!user) { return done(null, false); }

      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
 
passport.deserializeUser(function(id, done) {
  models.user.findById(id, function (err, user) {
    done(err, user);
  });
});

function login (req, res, next) {
    console.log('body = '+ JSON.stringify((req.body)))
    passport.authenticate('local', function(err, user, info) {
        console.log('in auth')
        if (err) { 
            return next(err); 
        }

        if (!user) {
            //return res.redirect('/login');
            console.log('user not found '+ JSON.stringify(info))
            res.status(404).send('user not found')
        }
        else
        {
            console.log('success')
            res.status(200).send('user found')
        }
    })(req,res,next)
    
    //next();
}

function isAuth(req,res,next)
{
    if(req.isAuthenticated() || req.url == '/')
    {
        next()
    }
    else
    {
        console.log('not auth '+req.url)
        res.status(404).send('user not found')
    }
}

module.exports = {
    isAuth,
    login,
    passport
}
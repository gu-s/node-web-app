const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
//model class
const User=mongoose.model('users');

passport.serializeUser((user,done)=>{
  done(null,user.id);
});
passport.deserializeUser((id,done)=>{
  User.findById(id).then(
    user=>{
      done(null,user);
    }
  );
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL:'/auth/google/callback',
  proxy:true
},
async (accesToken, refreshToken, profile, done)=>{
  // console.log('accesToken',accesToken);
  // console.log('refreshToken :',refreshToken);
  // console.log('profile',profile);
  const existingUser = await User.findOne({
      googleId:profile.id
    });

        if(existingUser){
            var errors = null;
            return done(errors,existingUser);
        }
        const user =await new User({
          googleId:profile.id,
          displayName:profile.displayName
        }).save();
        return done(null,user);



}

));

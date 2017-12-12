const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
//model class
const User=mongoose.model('users');


passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL:'/auth/google/callback'
},(accesToken, refreshToken, profile, done)=>{
  // console.log('accesToken',accesToken);
  // console.log('refreshToken :',refreshToken);
  // console.log('profile',profile);
  new User({googleId:profile.id}).save();
}
));

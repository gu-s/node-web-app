const passport = require('passport');

module.exports = (app)=>{
  app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
  }));

  app.get('/auth/google/callback',
  passport.authenticate('google'),(req,res)=>{
  res.redirect('/surveys');
    //res.send(req.user);
  });

  app.get('/api/current_user',(req,res)=>{
    //console.log(req);
    res.send(req.user);
  });

  app.get('/api/logout',(req,res)=>{
    req.logout();//clear cookies
    res.send(req.user);//empty

  });

  app.get('/',(req,res)=>{
    res.send({
      name:"web Services Node"
    });
  });



}

var express = require('express');
var router = express.Router();
const logos = require('../helpers/logo');
let logo=logos.weblogo

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',(req,res,next)=>{
  res.render('login',{title:"login page",admin:true,logo});
})

router.post('/login',(req,res,next)=>{
  console.log(req.body);
  res.send('Sucess');
})

router.get('/signup',(req,res,next)=>{
  res.render('signup',{title:"Signup page",admin:true,logo});
})


router.post('/signup',(req,res,next)=>{
  console.log(req.body);
  res.send("Sucess");
})


module.exports = router;

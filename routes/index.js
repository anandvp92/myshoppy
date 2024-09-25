var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',admin:true});
});

router.get('/about',(req,res,next)=>{
  res.render('about',{title:"about page",admin:true})
})

router.get('/contact',(req,res,next)=>{
  res.render('contact',{title:"contact page",admin:true})
})



module.exports = router;

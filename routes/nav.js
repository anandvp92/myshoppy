var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.render("about",{title:"about page",admin:true});
})

module.exports=router;
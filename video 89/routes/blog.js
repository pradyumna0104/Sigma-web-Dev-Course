const express = require('express')
const router =  express.Router()

router.get('/',(req,res)=>{
    res.send("Blog home page");
})

router.get('/about',(req,res)=>{
    res.send("blog about page");
})

router.get('/:slug',(req,res)=>{
    res.send(`fetch the blog page named ${req.params.slug}`);
})

module.exports = router;
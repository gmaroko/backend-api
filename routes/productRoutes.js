const express = require('express')
const router = express.Router();

// Product Model
const Product = require('../models/product');

// @route GET /products
// @desc Get ALL products
router.get('/', (req,res)=>{
   // Fetch all products from database
   Product.find({}, (error, product)=>{
       if (error) console.log(error)
       res.json(product)
   })
})

module.exports = router;
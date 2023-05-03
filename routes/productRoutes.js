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

// @route POST /products
router.post('/', (req,res)=>{
   console.log(req.body)
   // Create a product item
   const newProduct = new Product({
       name: req.body.name,
       description: req.body.description,
       price: req.body.price,
       quantity: req.body.quantity,
   });

   newProduct.save((err, product)=>{
       if (err) console.log(err)
       res.json(product)
   })
})

// @desc  Update a product
router.put('/:id', (req,res)=>{
   // Update a product in the database
   Product.updateOne({_id:req.params.id},{
       name: req.body.name,
       description: req.body.description,
       price: req.body.price,
       quantity: req.body.quantity,
   }, {upsert: true}, (err, product)=>{
       if(err) console.log(err);
       res.json(product)
   })
})

// @desc  Delete a product
router.delete('/:id', (req,res)=>{
   // Delete a product from database
   Product.deleteOne({_id: req.params.id}, (err)=>{
       if (err){
           console.log(err)
           res.json({success:false})
       }else{
           res.json({success:true})
       }
   })
})

module.exports = router;
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


let productSchema = new Schema({
   name: {type: String, default: "", required: true},
   description: {type: String, default: "", required: true},
   price:{type: Number, default: "", required: true},
   quantity: {type: Number, default: "", required: true},
   image: {type: String, default: "", required: true}
})

let Product = mongoose.model('Product', productSchema)

module.exports = Product;

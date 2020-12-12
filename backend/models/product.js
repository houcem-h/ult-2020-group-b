const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  productName: {type: String},
  price: {type: Number},
  image: {type: String},
  description: {type: String}
}, {
  collection: 'products'
});

module.exports = mongoose.model('Product', Product)

const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
  name:{type:String,required:[true, 'Needs to have a product name'],minLength:[4,'The product name must be at least 3 characters']},
  price:{type:Number,required:[true,'Needs to have a price']},
  image:{type:String,required:[true,'Needs to have an image url']}
},{timestamps:true });
mongoose.model('Products',productsSchema);
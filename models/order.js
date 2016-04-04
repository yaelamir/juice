var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var orderSchema = new mongoose.Schema({
  deliveryOrPickup: { type: String, required: false },
  completedOrder:  { type: String, required: true },
  time: { type: Number, require: true },
  user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  juices: [juiceSchema]
});

var juiceSchema = new mongoose.Schema({
  size: { type: number, required: true },
  price: { type: number, required: true },
  ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}]
});


var Order = mongoose.model('Order', orderSchema);

module.exports = Order;

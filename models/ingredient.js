var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var nutrientSchema = new mongoose.Schema({
  name:   { type: String },
  amount: { type: Number },
  unit:   { type: String }
});

var ingredientSchema = new mongoose.Schema({
  name: { type: String },
  category: { type: String },
  nutrients: [nutrientSchema]
});

var ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = ingredient;

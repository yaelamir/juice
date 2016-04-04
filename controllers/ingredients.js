var Ingredient = require("../models/ingredient"),
    User = require("../models/user");

module.exports = {
  index: index,
  create: create
}

function index(req, res) {
  Ingredient.find({}, function(err, ings) {
    if (err) {
      res.send(err);
    } else {
      res.json(ings);
    }
  })
}

function create(req, res) {
  var ingredient = new Ingredient();
  console.log(req.body);
  ingredient.name     = req.body.name;
  ingredient.category = req.body.category;
  req.body.nutrients.forEach(function(arr) {
    console.log(arr);
    var nut = {};
    nut.name   = arr[0];
    nut.amount = arr[1];
    nut.unit   = arr[2];
    ingredient.nutrients.push(nut);
  });

  console.log("this is the ing", ingredient);

  ingredient.save(function(err, ing) {
    if (err) {
      res.send(err);
    } else {
      res.json({msg: "ingredient created", ingredient: ing})
    }
  })
}

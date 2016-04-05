var Ingredient = require("../models/ingredient"),
    User = require("../models/user");

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
};

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
};

function show(req, res) {
  var id = parseInt(req.params.id);

  var showIngredient = Ingredients.find({}, function(err, ings) {
    return ings.id === id;
  })

  if (showIngredient) {
    res.json(showIngredient);
  } else {
    res.json({err: "ingredient doesn't exist"})
  }
};

function update(req, res) {
  var updateIngredient = req.body;

  var id = parseInt(req.params.id);

  var ingredient = ingredients.find(function(ingredient) {
    return ingredient.id === id;
  });
}

function destroy(req, res) {
  var id = parseInt(req.params.id);

  var ingredient = ingredients.find(function(burger) {
    return ingredient.id === id;
  });

  var ingredientId = ingredients.indexOf(ingredient);
}










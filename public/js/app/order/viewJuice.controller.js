(function() {
  "use strict";

  angular
    .module("app")
    .controller("ViewJuiceController", ViewJuiceController);

  ViewJuiceController.$inject = ["$log", "cartService", "orderService"];

  function ViewJuiceController ($log, cartService, orderService) {
    var vm = this;
    $log.info("View Juice Controller Loaded!");

    vm.cart = cartService;
    vm.data = orderService;
    vm.showNutrients = showNutrients;
    vm.calculateNutrients = calculateNutrients;

    function showNutrients() {
      var matchedIngredients = [];
      $log.info("cart juices: ", vm.cart.juices);
      vm.cart.juices.ing.forEach(function(element) {
        vm.data.ingredients.forEach(function(keyIngredient) {
          if (element === keyIngredient.name) {
            $log.info("key ing: ", keyIngredient);
            matchedIngredients.push(keyIngredient);
          }
        })
      })
      $log.info("matched: ", matchedIngredients);

        // for (var i = 0; i < vm.data.ingredients.length; i++) {


          // for (var j = 0; j < element.ing.length; j++) {
            // if (vm.data.ingredients[i].name === element.ing[j]) {
            //   matchedIngredients.push(vm.data.ingredients[i].nutrients);
            //   ($log.info("matched ingredients: ", element.ing[j]);
            // }
          // }
        // }
      // return matchedIngredients;
      calculateNutrients(matchedIngredients);
    }

    function calculateNutrients(matchedIngredients) {
      var nutrientTotal = matchedIngredients[0].nutrients.map(function(elem) {
        var key = Object.keys(elem)[0];
        var value = 0;
        return {[key]: value};
      })
      $log.info("nutrient total: ", nutrientTotal);
      matchedIngredients.forEach(function(ing) {
        ing.nutrients.forEach(function(nut, i) {
          var key = Object.keys(nut)[0];
          $log.info("key: ", key);
          nutrientTotal[i][key] += nut[key];
        })
      })
      $log.info("nutrient total: ", nutrientTotal);
    }

  }
})();

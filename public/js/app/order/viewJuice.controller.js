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
      vm.cart.juices.forEach(function(element, index, array) {
        for (var i = 0; i < vm.data.ingredients.length; i++) {
          for (var j = 0; j < element.ing.length; j++) {
            if (vm.data.ingredients[i].name === element.ing[j]) {
              matchedIngredients.push(vm.data.ingredients[i].nutrients);
              $log.info("matched ingredients: ", matchedIngredients);
            }
          }
        }
      });
      return matchedIngredients;
    }

    function calculateNutrients() {


    }

  }
})();

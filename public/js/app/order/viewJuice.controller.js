(function() {
  "use strict";

  angular
    .module("app")
    .controller("ViewJuiceController", ViewJuiceController);

  ViewJuiceController.$inject = ["$log", "cartService", "orderService", "$state"];

  function ViewJuiceController ($log, cartService, orderService, $state) {
    var vm = this;
    $log.info("View Juice Controller Loaded!");

    vm.cart = cartService;
    vm.data = orderService;
    vm.checkout = checkout;
    vm.returnToOrder = returnToOrder;

    vm.juicesNutritions = [];

    calcNutrients();

    function calcNutrients() {
      vm.cart.juices.forEach(function(juice, idx) {
        vm.juicesNutritions.push({
          title: 'Juice ' + (idx + 1) + ': ' + juice.size,
          ingredients: juice.ing,
          nutrients: createNutList(juice.ing)
        });
      });
    }

    function createNutList(ingredients) {
      var nuts = {};
      ingredients.forEach(function(ing) {
        var nutsForIng = _.find(vm.data.ingredients, {'name': ing}).nutrients;
        nutsForIng.forEach(function(n) {
          var key = Object.keys(n)[0];
          if (!nuts[key]) nuts[key] = 0;
          nuts[key] += n[key];
        });
      });
      var retNuts = [];
      for (var nut in nuts) {
        retNuts.push({
          name: nut,
          value: nuts[nut],
          unit: vm.data.nutrientUnits[nut]
        });
      }
      return retNuts;
    }

    function checkout() {
      $log.info("going to cart");
      $state.go("cart");
    };

    function returnToOrder() {
      $log.info("returning to order");
      $state.go("order");
    };
  };
})();

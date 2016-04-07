(function() {
  "use strict";

  angular
    .module("app")
    .factory("currentJuiceService", currentJuiceService);

  currentJuiceService.$inject = ["$log", "cartService"];

  function currentJuiceService($log, cartService) {
    var currentJuice = {
      ing:  [],
      size: "",
      hasIngredient: hasIngredient,
      pushJuiceOnCart: pushJuiceOnCart,
      logCart: logCart
    };

    return currentJuice;

    function pushJuiceOnCart() {
      var ingredients = angular.copy(currentJuice.ing);
      var size = currentJuice.size;
      cartService.juices.push({ing: ingredients, size: size});
      clear();
    }

    function hasIngredient(ingredient) {
      return currentJuice.ing.indexOf(ingredient.name) !== -1;
    }

    function clear() {
      currentJuice.ing.length = 0;
      currentJuice.size = ""
    }

    function logCart() {
      cartService.log();
    }

  }
})();

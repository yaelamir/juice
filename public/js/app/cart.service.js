(function() {
  "use strict";

  angular
    .module("app")
    .factory("cartService", cartService);

  cartService.$inject = ["$window", "$log"];

  function cartService($window, $log) {

    var cart = {
      juices:   [],
      delivery: "",
      date:     new Date(),
      time:     "",
      log:      logCart
    };

    return cart;
    localStorage.setItem('cart', JSON.strigify(cart));

    function logCart() {
      $log.debug(cart);
    }

  }
})();

(function() {
  "use strict";

  angular
    .module("app")
    .controller("OrderController", OrderController);

  OrderController.$inject = ["$log", "orderService"];

  function OrderController($log, orderService) {
    $log.debug("order controller loaded");
  }
})();

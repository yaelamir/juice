(function() {
  "use strict";

  angular
    .module("app")
    .controller("OrderController", OrderController);

  OrderController.$inject = ["$log", "$scope", "orderService"];

  function OrderController($log, $scope, orderService) {
    $log.debug("order controller loaded");
    var vm = this;

    vm.data = orderService;

    vm.timeSelect = {
      singleSelect: null,
      multipleSelect: []
    }

  };
})();

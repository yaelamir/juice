(function() {
  "use strict";

  angular
    .module("app")
    .controller("OrderController", OrderController);

  OrderController.$inject = ["$log", "$scope", "orderService"];

  function OrderController($log, $scope, orderService) {
    $log.debug("order controller loaded");
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });


    var vm = this;

    vm.data = orderService;



  };
})();

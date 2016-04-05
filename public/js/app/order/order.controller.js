(function() {
  "use strict";

  angular
    .module("app")
    .controller("OrderController", OrderController);

  OrderController.$inject = ["$log", "$scope", "orderService"];

  function OrderController($log, $scope, orderService) {
    $log.info("order controller loaded");
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });


    var vm = this;

    vm.data = orderService;
    vm.addIng = addIng;
    // vm.ingredients = [];
    vm.newJuice = newJuice;

    var newJuice = {
      ing: [],
      size: "",
      delivery: "",
      time: "",
      date: ""
    }

    function addIng(ing) {
      $log.info("ingredient added to juice");
      newJuice.ing.push(ing)
      $log.info(" juice", newJuice);


    };

  };
})();

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
    vm.myStyle = false;

    var newJuice = {
      ing: [],
      size: "",
      delivery: "",
      time: "",
      date: ""
    }

    function addIng(ing) {
      $log.info("ingredient added to juice");
      // var found = $.inArray(ing, newJuice.ing) > -1;
      var found = newJuice.ing.indexOf(ing);
      if (found === -1) {
        $log.info("item found: ", found);
        newJuice.ing.push(ing)
        $log.info("juice: ", newJuice.ing);
      } else {
        newJuice.ing.splice(found, 1);
        $log.info("item removed: ", found);
        $log.info("updated juice: ", newJuice.ing);
      }
    };

  };
})();

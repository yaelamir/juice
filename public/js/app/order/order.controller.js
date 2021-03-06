(function() {
  "use strict";

  angular
    .module("app")
    .controller("OrderController", OrderController);

  OrderController.$inject = ["$log", "$scope", "orderService", "$window", "currentJuiceService", "$state"];

  function OrderController($log, $scope, orderService, $window, currentJuiceService, $state) {
    $log.info("order controller loaded");
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });


    var vm = this;

    vm.data            = orderService;
    vm.addIng          = addIng;
    vm.newJuice        = currentJuiceService;
    vm.selectJuiceSize = selectJuiceSize;
    vm.addDelivery     = addDelivery;
    vm.addPickup       = addPickup;
    vm.testData        = testData;
    vm.submitOrder     = submitOrder;
    vm.yourJuice       = false;
    vm.colorDelivery    = colorDelivery;
    vm.colorPickup     = colorPickup;

    function addIng(ing) {
      $log.info("ingredient added to juice");
      var found = vm.newJuice.ing.indexOf(ing.name);
      if (found === -1) {
        vm.newJuice.ing.push(ing.name);
      } else {
        vm.newJuice.ing.splice(found, 1);
      }
    };

    function selectJuiceSize(juice) {
      vm.newJuice.size = juice.size;
      $log.info("Order size selected: ", juice.size);
      $log.info(vm.newJuice);
    };

    function addDelivery() {
      vm.newJuice.delivery = "delivery";
      $log.info(vm.newJuice.delivery);
      $log.info(vm.newJuice);
    };

    function colorDelivery() {
      if (vm.newJuice.delivery === "delivery") {
        return true;
      }
    };

    function colorPickup() {
      if (vm.newJuice.delivery === "pick up") {
        return true;
      }
    };

    function addPickup() {
      vm.newJuice.delivery = "pick up";
      $log.info(vm.newJuice.delivery);
      $log.info(vm.newJuice);
    };

    function testData() {
      $log.info(vm.newJuice.date)
      var dt = $('[name="selDate"]').val();
      var tm = $('[name="timeSelect"]').val();
      $log.info("selDate: ", dt);
      $log.info("selected Time: ", tm);
      if (dt) {
        vm.newJuice.date = dt;
        vm.newJuice.time = tm;
      } else {
        $log.info("Must select a date");
        $window.alert("Must select a date");
      }
      $log.info("juice order: ", vm.newJuice);
    };

    function submitOrder() {
      // if (vm.newJuice.ing.length < 1 || vm.newJuice.size === "" || vm.newJuice.delivery === "") {
      //   $window.alert("Missing Fields")
      // } else {
      //   vm.yourJuice = true;
      // }
      $log.debug('SUBMITTING')
      currentJuiceService.pushJuiceOnCart();
      // $scope.$apply();
      currentJuiceService.logCart();
      $state.go("viewJuice");
    };
  };
})();

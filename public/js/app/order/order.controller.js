(function() {
  "use strict";

  angular
    .module("app")
    .controller("OrderController", OrderController);

  OrderController.$inject = ["$log", "$scope", "orderService", "$window"];

  function OrderController($log, $scope, orderService, $window) {
    $log.info("order controller loaded");
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });


    var vm = this;

    vm.data = orderService;
    vm.addIng = addIng;
    vm.newJuice = newJuice;
    vm.myStyle = false;
    vm.addSize = addSize;
    vm.addDelivery = addDelivery;
    vm.addPickup = addPickup;
    // vm.addDate = addDate;
    vm.testData = testData;
    vm.submitOrder = submitOrder;
    vm.yourJuice = false;

    var newJuice = {
      ing: [],
      size: "",
      delivery: "",
      date: new Date(),
      time: "",
    }


    function addIng(ing) {
      $log.info("ingredient added to juice");
      var found = newJuice.ing.indexOf(ing.name);
      if (found === -1) {
        $log.info("item found: ", found);
        newJuice.ing.push(ing.name);
        $log.info("juice: ", newJuice.ing);
        ing.myStyle = !ing.myStyle;
      } else {
        newJuice.ing.splice(found, 1);
        $log.info("item removed: ", found);
        $log.info("updated juice: ", newJuice.ing);
        ing.myStyle = !ing.myStyle;
      }
    };


    // function addSize(sz) {
    //   if (newJuice.size === sz) {
    //     sz.myStyle = !sz.myStyle;
    //   } else {
    //     newJuice.size = sz;
    //     $log.info("size added to order: ", sz);
    //     $log.info(newJuice);
    //     sz.myStyle = !sz.myStyle;
    //   }
    // };

    function addSize(sz) {
      newJuice.size = sz;
      // sz.myStyle = !sz.myStyle;
      $log.info("size added to order: ", sz);
      $log.info(newJuice);
      sz.myStyle = !sz.myStyle;
    };

    function addDelivery() {
      $log.info(newJuice);
      newJuice.delivery = "delivery";
      $log.info(newJuice.delivery);
      $log.info(newJuice);
    };

    function addPickup() {
      $log.info(newJuice);
      newJuice.delivery = "pick up";
      $log.info(newJuice.delivery);
      $log.info(newJuice);
    };

    // function addDate() {
    //   $log.info(newJuice.date);
    //   $log.info(vm.date)
    //   newJuice.date = new Date(vm.date);
    //   $log.info(newJuice.date);
    // };

    function testData() {
      $log.info("testing")
      $log.info(vm.newJuice.date)
      var dt = $('[name="selDate"]').val();
      var tm = $('[name="timeSelect"]').val();
      $log.info("selDate: ", dt);
      $log.info("selected Time: ", tm);
      if (dt) {
        newJuice.date = dt;
        newJuice.time = tm;
      } else {
        $log.info("Must select a date");
        $window.alert("Must select a date");
      }
      $log.info("juice order: ", newJuice);
    }

    function submitOrder() {
      vm.yourJuice = true;
    }


  };
})();

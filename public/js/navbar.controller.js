(function() {
  "use strict";

  angular
    .module("app")
    .controller("NavbarController", NavbarController);

  NavbarController.$inject = ["$log", "authService"];

  function NavbarController($log, authService) {
    var vm = this;

    vm.authService = authService;
    vm.logOut      = logOut;

    function logOut() {
      authService.logOut();
    }

    $log.info("NavbarController loaded!");
  }
})();

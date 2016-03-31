(function() {
  "use strict";

  angular
    .module('app')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ["$log", "authService"];

  function ProfileController($log, authService) {
    var vm = this;

    vm.formData = {
      email: authService.currentUser().email, // This just copies the
      name:  authService.currentUser().name   // string values, instead
    };                                        // of binding some object.
    vm.authService = authService;

    $log.info('ProfileController loaded!');
  }

})();

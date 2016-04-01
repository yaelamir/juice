(function() {
  "use strict";

  angular
    .module('app')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ["$log", "authService", "userService"];

  function ProfileController($log, authService, userService) {
    var vm = this;

    vm.formData = {
      email: authService.currentUser().email, // This just copies the
      name:  authService.currentUser().name   // string values, instead
    };                                        // of binding some object.
    vm.authService  = authService;
    vm.submitUpdate = submitUpdate;

    function submitUpdate() {
      userService
        .update(vm.formData)
        .then(function(res) {
          $log.info('Updated!', res);

          // Clear the password fields in the view (if they were used).
          vm.formData.password = '';
          vm.formData.passwordConfirmation = '';
        })
        .catch(function(err) { $log.info('Error:', err); })
    }

    $log.info('ProfileController loaded!');
  }

})();

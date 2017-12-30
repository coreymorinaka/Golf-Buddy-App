app.controller('navController', function ($scope, $state, $stateParams, golferService) {
    $scope.golferService = golferService
    $scope.logout = function () {
        golferService.logout();
    }
})
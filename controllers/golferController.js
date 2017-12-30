app.controller("golferController", function ($scope, $stateParams, $state, golferService) {
  $scope.golfers = golferService.getGolfers();//get all golfers
  if ($stateParams.id == "" || $stateParams.id == null || $stateParams.id == undefined) {
    $scope.submitButton = true;
    $scope.heading = "Create a Profile!";
    $scope.golfer = golferService.getGolferById($stateParams.id);
  }
  else {
    $scope.submitButton = false;
    $scope.heading = "Update Account!";
    $scope.golfer = golferService.getGolferById($stateParams.id);
  }
  $scope.addGolfer = function () {// calling add golfer function
    golferService.addGolfer($scope.golfer)
  }
  $scope.updateGolfer = function () {// calling save function to update fields that were altered
    golferService.updateGolfer($scope.golfer)
  }
  $scope.deleteGolfer = function () {// calling delete function
    golferService.deleteGolfer($stateParams.id)
    golferService.deleteGolfer();
  }
  $scope.login = function () {// calling login
    golferService.login($scope.golfer);
  }
  $scope.logout = function () {// calling logout
    golferService.logout();
  }
})

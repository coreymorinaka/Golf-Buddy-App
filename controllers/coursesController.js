app.controller("coursesController", function ($scope, $stateParams, $state, coursesService, $http) {
  var anaheim = 'Anaheim, CA';
  $scope.initMap = function (zoom, address) {
    var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      zoom: zoom
    });
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'address': address
    },
      function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
          map.setCenter(results[0].geometry.location);
        }
      });
  }
  $scope.initMap(9, anaheim);
  console.log("test")
  $scope.courses = coursesService.getCourse();
  if ($stateParams.id == "" || $stateParams.id == null || $stateParams.id == undefined) {
    $scope.submitButton = true;
    $scope.heading = "Add a Course!";
    $scope.course = coursesService.getCourseById($stateParams.id);
  }
  else {
    $scope.submitButton = false;
    $scope.heading = "Update Course Info!";
    $scope.course = coursesService.getCourseById($stateParams.id);
  }
  $scope.addCourse = function () {// calling add courses function
    console.log($scope.course);
    coursesService.addCourse($scope.course)
  }
  $scope.updateCourse = function () {// calling save function to update fields that were altered
    coursesService.updateCourse($scope.course)
  }
  $scope.deleteCourse = function (course) {// calling delete function
    coursesService.deleteCourse(course.id)
    console.log($stateParams.id)
  }
})
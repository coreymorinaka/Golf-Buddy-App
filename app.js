var app = angular.module("golfBuddyApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('app', {
      abstract: true,
      url: '',
      templateUrl: "./views/app-container.html"
    })
    .state("app.home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "golferController"
    })
    .state("app.golfers", { // index view
      url: '/golfers',
      templateUrl: "./views/golfers.html",
      controller: "golferController"
    })
    .state("app.golfersCreate", { // form-view
      url: '/golfers/new',
      templateUrl: "./views/golfers-form.html",
      controller: "golferController"
    })
    .state("app.golfer", { // show view
      url: '/golfers/:id',
      templateUrl: "./views/golfer.html",
      controller: "golferController"
    })
    .state("app.golfersUpdate", { // form-view
      url: '/golfers/:id/edit',
      templateUrl: "./views/golfers-form.html",
      controller: "golferController"
    })
    .state("app.courses", {
      url: '/courses',
      templateUrl: "./views/courses.html", // index view
      controller: "coursesController"
    })
    .state("app.coursesCreate", { // form-view
      url: '/courses/new',
      templateUrl: "./views/courses-form.html",
      controller: "coursesController"
    })
    .state("app.coursesUpdate", { // form-view
      url: '/courses/:id/edit',
      templateUrl: "./views/courses-form.html",
      controller: "coursesController"
    })

})
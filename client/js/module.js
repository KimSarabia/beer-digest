'use strict';

var app = angular.module('beerApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', { url: '/', templateUrl: '/html/login.html' })
    .state('dashboard', {url: "/dashboard", templateUrl: "html/dashboard.html",controller: "profileCtrl"})
    .state('beer', {url: "/beer", templateUrl: "templates/beer.html", controller: "beerCtrl"})
  })
  $urlRouterProvider.otherwise('/');
});

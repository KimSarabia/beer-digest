'use strict';

var app = angular.module('beerApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })

  $urlRouterProvider.otherwise('/');
});

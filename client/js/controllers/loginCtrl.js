'use strict';

var app = angular.module('beerApp');

app.controller('loginCtrl', function($scope, UserService) {
  $scope.login = function(user) {
    UserService.login(user)
      .then(function(res) {
        $state.go('dashboard');
        console.log('res:', res);
      }, function(err) {
        console.error(err);
      });
  }
});

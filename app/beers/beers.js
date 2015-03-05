(function(){
  'use strict';

  // Criando o module
  angular.module('myApp.beers', ['ngRoute', 'myApp.beers.filters', 'myApp.beers.services', 'myApp.beers.controllers'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/beers', {
      templateUrl: 'beers/beers.html',
      controller: 'BeerListController'
    })
    .when('/beers/create', {
      templateUrl: 'beers/create.html',
      controller: 'BeerCreateController'
    })
    .when('/beers/:id', {
      templateUrl: 'beers/get.html',
      controller: 'BeerGetController'
    })
    .when('/beers/:id/edit', {
      templateUrl: 'beers/edit.html',
      controller: 'BeerEditController'
    })
    ;
  }])
  ;  
})();
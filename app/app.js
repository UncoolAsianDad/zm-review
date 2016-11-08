'use strict';

// Declare app level module which depends on views, and components
angular.module('zmReviewer', [
  'ngRoute',
  'zmReviewer.config',
  'zmReviewer.timeline',
  // 'zmReviewer.view2',
  'zmReviewer.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/timeline'});
}]);

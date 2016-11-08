'use strict';

angular.module('zmReviewer.timeline', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/timeline', {
    templateUrl: 'timeline/timeline.html',
    controller: 'timelineCtrl'
  });
}])

.controller('timelineCtrl', [function() {

}]);
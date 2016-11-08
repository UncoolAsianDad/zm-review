'use strict';

angular.module('zmReviewer.events', ['zmReviewer.config'])
    .factory('eventsService', ['$http', function($http) {
        return {
            login: function(){
                zmReviewer.config.host;
                return true;
            }
        }
    }]);
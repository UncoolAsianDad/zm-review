'use strict';

angular.module('myApp.version', [
  'zmReviewer.version.interpolate-filter',
  'zmReviewer.version.version-directive'
])

.value('version', '0.1');

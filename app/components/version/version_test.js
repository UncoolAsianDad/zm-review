'use strict';

describe('zmReviewer.version module', function() {
  beforeEach(module('zmReviewer.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});

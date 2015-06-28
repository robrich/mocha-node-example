'use strict';

var assert = require('assert');

describe('this is a group', function () {

	it('should be true', function () {
		assert(true, 'the message');
	});
	it('should be false', function () {
		assert(false === false, 'the message');
	});
	it('should do nothing', function () {

	});

});
describe('this is another group', function () {
	it('should validate my business rules', function () {
		assert('this is truthy', 'this is truthy');
	});
});
